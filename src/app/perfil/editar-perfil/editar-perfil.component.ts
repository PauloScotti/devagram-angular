import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/compartilhado/autenticacao/autenticacao.service';
import { UsuarioLogado } from 'src/app/compartilhado/autenticacao/usuario-logado.type';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  public form: FormGroup;
  public usuarioLogado?: UsuarioLogado | null;
  constructor(
      private router: Router,
      private fb: FormBuilder,
      private servicoAutenticacao: AutenticacaoService
    ) {
      this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
      
      this.form = this.fb.group({
        file: [null],
        nome: [this.usuarioLogado?.nome, [Validators.required, Validators.minLength(3)]]
      })
  }

  ngOnInit(): void {
  }

  public obterReferenciaInput(nomeInput: string): AbstractControl {
    return this.form.controls[nomeInput];
  }

  public voltarParaHome(): void {
    this.router.navigateByUrl('/');
  }

  public async atualizarPerfil(): Promise<void> {
    console.log('atualizar perfil');
  }

  public limparInputNome() {
    this.obterReferenciaInput('nome').setValue('');
  }

}
