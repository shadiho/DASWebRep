import { TestBed } from '@angular/core/testing';

import { DasDropDownListService } from './das-drop-down-list.service';

describe('DasDropDownListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DasDropDownListService = TestBed.get(DasDropDownListService);
    expect(service).toBeTruthy();
  });
});
