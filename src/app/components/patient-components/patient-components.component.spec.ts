import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComponentsComponent } from './patient-components.component';

describe('PatientComponentsComponent', () => {
  let component: PatientComponentsComponent;
  let fixture: ComponentFixture<PatientComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
