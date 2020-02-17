import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditPageComponent } from './patient-edit-page.component';

describe('PatientEditPageComponent', () => {
  let component: PatientEditPageComponent;
  let fixture: ComponentFixture<PatientEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
