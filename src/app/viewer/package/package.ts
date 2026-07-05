import { Component, computed, input, signal } from '@angular/core';
import { OrdDocument } from '@open-resource-discovery/specification';
import { Resource } from '../resource/resource';

@Component({
  selector: 'ord-package',
  imports: [Resource],
  templateUrl: './package.html',
  styleUrl: './package.css',
})
export class Package {
  ordId = input.required<string>();
  document = input.required<OrdDocument>();
  ordPkg = computed(() => this.document().packages?.find((pkg) => pkg.ordId === this.ordId()));
  resources = computed(() => [
    ...(this.document()?.apiResources?.filter((res) => res.partOfPackage === this.ordId()) ?? []),
  ]);

  showMore = signal(false);
}
