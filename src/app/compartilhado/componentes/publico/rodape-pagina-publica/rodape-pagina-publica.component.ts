import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape-pagina-publica',
  templateUrl: './rodape-pagina-publica.component.html',
  styleUrls: ['./rodape-pagina-publica.component.scss']
})
export class RodapePaginaPublicaComponent implements OnInit {

  @Input() pergunta?: string;
  @Input() textoDaAcao?: string;
  @Input() rota?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
