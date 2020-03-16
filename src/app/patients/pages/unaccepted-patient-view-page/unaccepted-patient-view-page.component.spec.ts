import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnacceptedPatientViewPageComponent } from './unaccepted-patient-view-page.component';

describe('UnacceptedPatientViewPageComponent', () => {
  let component: UnacceptedPatientViewPageComponent;
  let fixture: ComponentFixture<UnacceptedPatientViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnacceptedPatientViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnacceptedPatientViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
