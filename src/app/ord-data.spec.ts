import { TestBed } from '@angular/core/testing';

import { OrdData } from './ord-data';

describe('OrdData', () => {
  let service: OrdData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
