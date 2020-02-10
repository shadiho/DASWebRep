import { TestBed } from '@angular/core/testing';

import { DasAppointmentsConflictService } from './das-appointments-conflict.service';

describe('DasAppointmentsConflictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DasAppointmentsConflictService = TestBed.get(DasAppointmentsConflictService);
    expect(service).toBeTruthy();
  });
});
