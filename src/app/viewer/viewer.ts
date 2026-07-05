import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdDocument } from '@open-resource-discovery/specification';
import { isArrayKey } from './ord.utils';
import { JsonPipe } from '@angular/common';
import { Package } from './package/package';

@Component({
  selector: 'ord-viewer',
  imports: [JsonPipe, Package],
  templateUrl: './viewer.html',
  styleUrl: './viewer.css',
})
export class Viewer implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  document = signal<OrdDocument | undefined>(undefined);
  loading = signal(false);

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const ordFile: string = params['ordFile'];
      if (!ordFile) return;
      void this.loadData(ordFile);
    });
  }

  async loadData(
    baseUrl = 'https://raw.githubusercontent.com/MariusPerle/free-api/main/base.json',
  ) {
    this.loading.set(true);
    const mainResponse = await fetch(baseUrl);
    const referenceDoc: { openResourceDiscoveryV1: { url: string }[] } = await mainResponse.json();
    const docs = await Promise.all(
      referenceDoc.openResourceDiscoveryV1.map(async ({ url }) => {
        const ordResponse = await fetch(url);
        return (await ordResponse.json()) as OrdDocument;
      }),
    );

    const mainDoc: OrdDocument = {
      openResourceDiscovery: '1.16',
    };
    for (const doc of docs) {
      for (const [key, value] of Object.entries(doc)) {
        if (isArrayKey(key)) {
          mainDoc[key] = [...(mainDoc[key] ?? []), ...value];
        }
      }
    }
    this.document.set(mainDoc);
    this.loading.set(false);
  }
}
