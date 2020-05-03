import { TestBed } from '@angular/core/testing';

import { NewInMemoryDataService } from './new-in-memory-data.service';

describe('NewInMemoryDataService', () => {
  let service: NewInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
