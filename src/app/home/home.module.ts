import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    CompartilhadoModule
  ]
})
export class HomeModule { }
