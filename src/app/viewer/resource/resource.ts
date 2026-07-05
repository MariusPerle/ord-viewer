import { Component, input, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  ApiResource,
  EventResource,
} from '@open-resource-discovery/specification/dist/generated/spec/v1/types/Document';
import { MarkdownPipe } from 'ngx-markdown';

@Component({
  selector: 'ord-resource',
  imports: [MarkdownPipe],
  templateUrl: './resource.html',
  styleUrl: './resource.css',
})
export class Resource {
  resource = input.required<ApiResource>();
  showMore = signal(false);
}
