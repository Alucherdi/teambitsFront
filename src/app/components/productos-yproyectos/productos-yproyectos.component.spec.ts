import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosYProyectosComponent } from './productos-yproyectos.component';

describe('ProductosYProyectosComponent', () => {
  let component: ProductosYProyectosComponent;
  let fixture: ComponentFixture<ProductosYProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosYProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosYProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
