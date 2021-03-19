import { TestBed } from '@angular/core/testing';

import { CongviecserviceService } from './congviecservice.service';

describe('CongviecserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongviecserviceService = TestBed.get(CongviecserviceService);
    expect(service).toBeTruthy();
  });
});
