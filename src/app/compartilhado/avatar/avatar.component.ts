import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() public src?: string;
  @Input() public classeCss?: string = '';

  public obterAvatar(): string {
    if(this.src){
      return this.src;
    }

    return 'assets/imagens/avatar.svg';
  }
}
