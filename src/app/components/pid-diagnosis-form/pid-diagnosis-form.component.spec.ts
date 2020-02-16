import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PidDiagnosisFormComponent } from './pid-diagnosis-form.component';

describe('PidDiagnosisFormComponent', () => {
  let component: PidDiagnosisFormComponent;
  let fixture: ComponentFixture<PidDiagnosisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PidDiagnosisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PidDiagnosisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
