import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { CabecalhoPerfilComponent } from './cabecalho-perfil/cabecalho-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilComponent,
    CabecalhoPerfilComponent,
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    CompartilhadoModule,
    ReactiveFormsModule
  ]
})
export class PerfilModule { }
