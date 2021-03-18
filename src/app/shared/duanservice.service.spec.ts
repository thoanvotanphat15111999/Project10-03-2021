import { TestBed } from '@angular/core/testing';

import { DuanserviceService } from './duanservice.service';

describe('DuanserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuanserviceService = TestBed.get(DuanserviceService);
    expect(service).toBeTruthy();
  });
});
