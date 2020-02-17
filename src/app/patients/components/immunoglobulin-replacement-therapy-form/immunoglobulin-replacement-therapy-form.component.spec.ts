import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunoglobulinReplacementTherapyFormComponent } from './immunoglobulin-replacement-therapy-form.component';

describe('ImmunoglobulinReplacementTherapyFormComponent', () => {
  let component: ImmunoglobulinReplacementTherapyFormComponent;
  let fixture: ComponentFixture<ImmunoglobulinReplacementTherapyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunoglobulinReplacementTherapyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunoglobulinReplacementTherapyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
