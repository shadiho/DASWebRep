import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DASAppointmentOpLogItemComponent } from './dasappointment-op-log-item.component';

describe('DASAppointmentOpLogItemComponent', () => {
  let component: DASAppointmentOpLogItemComponent;
  let fixture: ComponentFixture<DASAppointmentOpLogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DASAppointmentOpLogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DASAppointmentOpLogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
