import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  @Input() public texto?: string;
  @Input() public cor: string = 'primaria';
  @Input() public classeCss: string = '';
  @Input() public tipo: string = 'button';
  @Input() public desabilitar: boolean = false;
}
