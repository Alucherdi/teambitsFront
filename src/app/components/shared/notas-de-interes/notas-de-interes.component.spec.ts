import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasDeInteresComponent } from './notas-de-interes.component';

describe('NotasDeInteresComponent', () => {
  let component: NotasDeInteresComponent;
  let fixture: ComponentFixture<NotasDeInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasDeInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasDeInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
