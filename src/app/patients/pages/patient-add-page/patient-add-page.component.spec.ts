import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddPageComponent } from './patient-add-page.component';

describe('PatientAddPageComponent', () => {
  let component: PatientAddPageComponent;
  let fixture: ComponentFixture<PatientAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
