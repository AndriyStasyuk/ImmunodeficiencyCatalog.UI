import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemcellsComponent } from './stemcells.component';

describe('StemcellsComponent', () => {
  let component: StemcellsComponent;
  let fixture: ComponentFixture<StemcellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemcellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemcellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
