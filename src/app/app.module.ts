import { CadastroModule } from './cadastro/cadastro.module';
import { LoginModule } from './login/login.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartilhadoModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
