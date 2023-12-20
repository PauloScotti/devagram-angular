import { TestBed } from '@angular/core/testing';

import { DevagramApiService } from './devagram-api.service';

describe('DevagramApiService', () => {
  let service: DevagramApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevagramApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
