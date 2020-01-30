import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunoglobulinReplacementTherapyComponent } from './immunoglobulin-replacement-therapy.component';

describe('ImmunoglobulinReplacementTherapyComponent', () => {
  let component: ImmunoglobulinReplacementTherapyComponent;
  let fixture: ComponentFixture<ImmunoglobulinReplacementTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunoglobulinReplacementTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunoglobulinReplacementTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
