import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { CabecalhoPerfilComponent } from './cabecalho-perfil/cabecalho-perfil.component';


@NgModule({
  declarations: [
    PerfilComponent,
    CabecalhoPerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    CompartilhadoModule
  ]
})
export class PerfilModule { }
