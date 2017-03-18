import { TestBed, inject } from '@angular/core/testing';

import { LegislationService } from './legislation.service';

describe('LegislationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegislationService]
    });
  });

  it('should ...', inject([LegislationService], (service: LegislationService) => {
    expect(service).toBeTruthy();
  }));
});
