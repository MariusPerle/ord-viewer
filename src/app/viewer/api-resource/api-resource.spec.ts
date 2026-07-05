import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResource } from './api-resource';

describe('Resource', () => {
  let component: ApiResource;
  let fixture: ComponentFixture<ApiResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiResource],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiResource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
