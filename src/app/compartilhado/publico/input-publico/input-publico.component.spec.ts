import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPublicoComponent } from './input-publico.component';

describe('InputPublicoComponent', () => {
  let component: InputPublicoComponent;
  let fixture: ComponentFixture<InputPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
