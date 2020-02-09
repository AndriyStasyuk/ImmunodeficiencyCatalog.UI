import { TestBed } from '@angular/core/testing';

import { GetPatientInfService } from './get-patient-inf.service';

describe('GetPatientInfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPatientInfService = TestBed.get(GetPatientInfService);
    expect(service).toBeTruthy();
  });
});
