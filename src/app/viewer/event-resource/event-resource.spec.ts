import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResource } from './event-resource';

describe('Resource', () => {
  let component: EventResource;
  let fixture: ComponentFixture<EventResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventResource],
    }).compileComponents();

    fixture = TestBed.createComponent(EventResource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
