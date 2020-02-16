import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathToDiagnosisFormComponent } from './path-to-diagnosis-form.component';

describe('PathToDiagnosisFormComponent', () => {
  let component: PathToDiagnosisFormComponent;
  let fixture: ComponentFixture<PathToDiagnosisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathToDiagnosisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathToDiagnosisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
