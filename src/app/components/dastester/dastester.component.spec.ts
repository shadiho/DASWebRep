import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DASTesterComponent } from './dastester.component';

describe('DASTesterComponent', () => {
  let component: DASTesterComponent;
  let fixture: ComponentFixture<DASTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DASTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DASTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
