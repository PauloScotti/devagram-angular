import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapePaginaPublicaComponent } from './rodape-pagina-publica.component';

describe('RodapePaginaPublicaComponent', () => {
  let component: RodapePaginaPublicaComponent;
  let fixture: ComponentFixture<RodapePaginaPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapePaginaPublicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapePaginaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
