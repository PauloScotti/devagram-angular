import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    NavegacaoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompartilhadoModule
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent
  ]
})
export class LayoutModule { }
