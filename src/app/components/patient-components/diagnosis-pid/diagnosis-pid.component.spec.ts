import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisPidComponent } from './diagnosis-pid.component';

describe('DiagnosisPidComponent', () => {
  let component: DiagnosisPidComponent;
  let fixture: ComponentFixture<DiagnosisPidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisPidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisPidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
