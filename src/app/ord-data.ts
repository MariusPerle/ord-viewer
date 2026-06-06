import { Injectable, signal } from '@angular/core';
import { OrdDocument } from '@open-resource-discovery/specification';
import { isArrayKey } from './ord.utils';

@Injectable({
  providedIn: 'root',
})
export class OrdData {
  document = signal<OrdDocument | undefined>(undefined);
  loading = signal(false);

  async loadData(baseUrl = 'https://raw.githubusercontent.com/MariusPerle/free-api/main/base.json') {
    this.loading.set(true);
    const mainResponse = await fetch(baseUrl);
    const referenceDoc: { openResourceDiscoveryV1: { url: string }[] } = await mainResponse.json();
    const docs = await Promise.all(referenceDoc.openResourceDiscoveryV1.map(async ({ url }) => {
      const ordResponse = await fetch(url);
      return await ordResponse.json() as OrdDocument;
    }))

    const mainDoc: OrdDocument = {
      openResourceDiscovery: "1.16",
    }
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
