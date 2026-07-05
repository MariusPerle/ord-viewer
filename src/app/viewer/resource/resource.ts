import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  ApiResource,
  EventResource,
} from '@open-resource-discovery/specification/dist/generated/spec/v1/types/Document';

@Component({
  selector: 'ord-resource',
  imports: [],
  templateUrl: './resource.html',
  styleUrl: './resource.css',
})
export class Resource {
  resource = input.required<ApiResource>();
  showMore = signal(false);
}
