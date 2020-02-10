import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DASAppointmentLogComponent } from './dasappointment-log.component';

describe('DASAppointmentLogComponent', () => {
  let component: DASAppointmentLogComponent;
  let fixture: ComponentFixture<DASAppointmentLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DASAppointmentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DASAppointmentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
