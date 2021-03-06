import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewPageComponent } from './patient-view-page.component';

describe('PatientViewPageComponent', () => {
  let component: PatientViewPageComponent;
  let fixture: ComponentFixture<PatientViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
