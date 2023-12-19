import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BotaoComponent,
    AvatarComponent,
    FormsModule
  ],
  exports: [
    BotaoComponent,
    AvatarComponent,
    FormsModule
  ]
})
export class CompartilhadoModule { }
