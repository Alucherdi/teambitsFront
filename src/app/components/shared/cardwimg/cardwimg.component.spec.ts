import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardwimgComponent } from './cardwimg.component';

describe('CardwimgComponent', () => {
  let component: CardwimgComponent;
  let fixture: ComponentFixture<CardwimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardwimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardwimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
