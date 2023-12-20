import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() public texto?: string;
  @Input() public cor: string = 'primaria';
  @Input() public classeCss: string = '';
  @Input() public tipo: string = 'button';
  @Input() public desabilitar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
