import { TestBed } from '@angular/core/testing';

import { CheckDorUpdateService } from './check-dor-update.service';

describe('CheckDorUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckDorUpdateService = TestBed.get(CheckDorUpdateService);
    expect(service).toBeTruthy();
  });
});
