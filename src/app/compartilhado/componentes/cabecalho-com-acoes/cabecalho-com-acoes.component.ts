import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho-com-acoes',
  templateUrl: './cabecalho-com-acoes.component.html',
  styleUrls: ['./cabecalho-com-acoes.component.scss']
})
export class CabecalhoComAcoesComponent implements OnInit {

  @Input() srcImagemEsquerda?: string;
  @Input() textoAcaoEsquerda?: string;
  @Input() textoAcaoDireita: string = '';
  @Input() titulo: string = '';
  @Input() desabilitarAcaoDireita: boolean = false;
  @Output() aoClicarAcaoEsquerda: EventEmitter<void> = new EventEmitter()
  @Output() aoClicarAcaoDireita: EventEmitter<void> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
