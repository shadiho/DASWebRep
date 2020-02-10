import { TestBed } from '@angular/core/testing';

import { DasSimulatorService } from './das-simulator.service';

describe('DasSimulatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DasSimulatorService = TestBed.get(DasSimulatorService);
    expect(service).toBeTruthy();
  });
});
