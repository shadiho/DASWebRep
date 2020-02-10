import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasappointmentComponent } from './dasappointment.component';

describe('DasappointmentComponent', () => {
  let component: DasappointmentComponent;
  let fixture: ComponentFixture<DasappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
