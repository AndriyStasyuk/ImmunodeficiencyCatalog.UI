import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListPageComponent } from './patient-list-page.component';

describe('PatientListPageComponent', () => {
  let component: PatientListPageComponent;
  let fixture: ComponentFixture<PatientListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
