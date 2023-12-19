import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BotaoComponent } from './compartilhado/botao/botao.component';
import { AvatarComponent } from './compartilhado/avatar/avatar.component';
import { UploadImagemComponent } from './compartilhado/upload-imagem/upload-imagem.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPublicoComponent } from './compartilhado/publico/input-publico/input-publico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    ReactiveFormsModule,
    FormsModule,
    InputPublicoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'devagram-angular';

  public form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      image: [null],
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  public aoTrocarImagem(){
    console.log('trocou imagem')
  }

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }
}
