import { TestBed } from '@angular/core/testing';

import { DasAppointmentsService } from './das-appointments.service';

describe('DasAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DasAppointmentsService = TestBed.get(DasAppointmentsService);
    expect(service).toBeTruthy();
  });
});
