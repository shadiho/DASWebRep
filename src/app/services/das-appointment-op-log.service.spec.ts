import { TestBed } from '@angular/core/testing';

import { DasAppointmentOpLogService } from './das-appointment-op-log.service';

describe('DasAppointmentOpLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DasAppointmentOpLogService = TestBed.get(DasAppointmentOpLogService);
    expect(service).toBeTruthy();
  });
});
