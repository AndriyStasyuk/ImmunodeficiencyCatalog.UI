import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayToDiagnoseComponent } from './way-to-diagnose.component';

describe('WayToDiagnoseComponent', () => {
  let component: WayToDiagnoseComponent;
  let fixture: ComponentFixture<WayToDiagnoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayToDiagnoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayToDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
