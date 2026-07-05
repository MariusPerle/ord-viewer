import { Component, computed, input, signal } from '@angular/core';
import { OrdDocument } from '@open-resource-discovery/specification';
import { ApiResourceComponent } from '../api-resource/api-resource';
import { EventResourceComponent } from '../event-resource/event-resource';

@Component({
  selector: 'ord-package',
  imports: [ApiResourceComponent, EventResourceComponent],
  templateUrl: './package.html',
  styleUrl: './package.css',
})
export class Package {
  ordId = input.required<string>();
  document = input.required<OrdDocument>();
  ordPkg = computed(() => this.document().packages?.find((pkg) => pkg.ordId === this.ordId()));
  apiResources = computed(
    () => this.document()?.apiResources?.filter((res) => res.partOfPackage === this.ordId()) ?? [],
  );
  eventResources = computed(
    () =>
      this.document()?.eventResources?.filter((res) => res.partOfPackage === this.ordId()) ?? [],
  );

  showMore = signal(false);
}
