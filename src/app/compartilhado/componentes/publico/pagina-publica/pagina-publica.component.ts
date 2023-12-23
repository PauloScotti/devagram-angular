import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagina-publica',
  templateUrl: './pagina-publica.component.html',
  styleUrls: ['./pagina-publica.component.scss']
})
export class PaginaPublicaComponent implements OnInit {

  @Input() classeCssCustomizada: string = '';
  @Input() classeCssLogo: string = '';
  @Input() textoBotaoSubmit?: string;
  @Output() submiterFormulario: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public aoSubmeter() {
    this.submiterFormulario.emit();
  }
}
