import { TestBed } from '@angular/core/testing';

import { FindItemService } from './find-item.service';

describe('FindItemService', () => {
  let service: FindItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
