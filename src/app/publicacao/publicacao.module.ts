import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacaoRoutingModule } from './publicacao-routing.module';
import { PublicacaoComponent } from './publicacao.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicacaoComponent
  ],
  imports: [
    CommonModule,
    PublicacaoRoutingModule,
    CompartilhadoModule,
    ReactiveFormsModule
  ]
})
export class PublicacaoModule { }
