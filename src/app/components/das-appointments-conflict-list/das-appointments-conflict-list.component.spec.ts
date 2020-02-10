import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasAppointmentsConflictListComponent } from './das-appointments-conflict-list.component';

describe('DasAppointmentsConflictListComponent', () => {
  let component: DasAppointmentsConflictListComponent;
  let fixture: ComponentFixture<DasAppointmentsConflictListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasAppointmentsConflictListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasAppointmentsConflictListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
