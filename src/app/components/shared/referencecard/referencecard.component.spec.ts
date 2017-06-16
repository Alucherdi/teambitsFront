import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencecardComponent } from './referencecard.component';

describe('ReferencecardComponent', () => {
  let component: ReferencecardComponent;
  let fixture: ComponentFixture<ReferencecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
