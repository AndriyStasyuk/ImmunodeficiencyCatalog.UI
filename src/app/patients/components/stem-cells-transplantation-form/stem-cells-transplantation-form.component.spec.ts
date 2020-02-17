import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemCellsTransplantationFormComponent } from './stem-cells-transplantation-form.component';

describe('StemCellsTransplantationFormComponent', () => {
  let component: StemCellsTransplantationFormComponent;
  let fixture: ComponentFixture<StemCellsTransplantationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemCellsTransplantationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemCellsTransplantationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
