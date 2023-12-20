import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPublicaComponent } from './pagina-publica.component';

describe('PaginaPublicaComponent', () => {
  let component: PaginaPublicaComponent;
  let fixture: ComponentFixture<PaginaPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPublicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
