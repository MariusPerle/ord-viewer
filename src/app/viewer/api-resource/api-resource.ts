import { Component, input, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  ApiResource,
  EventResource,
} from '@open-resource-discovery/specification/dist/generated/spec/v1/types/Document';
import { MarkdownPipe } from 'ngx-markdown';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ord-api-resource',
  imports: [MarkdownPipe, AsyncPipe],
  templateUrl: './api-resource.html',
  styleUrl: './api-resource.css',
})
export class ApiResourceComponent {
  resource = input.required<ApiResource>();
  showMore = signal(false);
}
