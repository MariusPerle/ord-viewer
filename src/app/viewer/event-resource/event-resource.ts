import { Component, input, signal } from '@angular/core';
import { MarkdownPipe } from 'ngx-markdown';
import { AsyncPipe } from '@angular/common';
import { EventResource } from '@open-resource-discovery/specification/dist/generated/spec/v1/types/Document';

@Component({
  selector: 'ord-event-resource',
  imports: [MarkdownPipe, AsyncPipe],
  templateUrl: './event-resource.html',
  styleUrl: './event-resource.css',
})
export class EventResourceComponent {
  resource = input.required<EventResource>();
  showMore = signal(false);
}
