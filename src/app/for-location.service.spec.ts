import { TestBed } from '@angular/core/testing';

import { ForLocationService } from './for-location.service';

describe('ForLocationService', () => {
  let service: ForLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
