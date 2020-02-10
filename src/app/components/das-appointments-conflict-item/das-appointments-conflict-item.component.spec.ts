import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasAppointmentsConflictItemComponent } from './das-appointments-conflict-item.component';

describe('DasAppointmentsConflictItemComponent', () => {
  let component: DasAppointmentsConflictItemComponent;
  let fixture: ComponentFixture<DasAppointmentsConflictItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasAppointmentsConflictItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasAppointmentsConflictItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
