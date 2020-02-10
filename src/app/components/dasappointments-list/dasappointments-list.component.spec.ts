import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasappointmentsListComponent } from './dasappointments-list.component';

describe('DasappointmentsListComponent', () => {
  let component: DasappointmentsListComponent;
  let fixture: ComponentFixture<DasappointmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasappointmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasappointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
