import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(
      private fb: FormBuilder,
      private autenticacaoService: AutenticacaoService
    ) {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
  }

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }

  public async submit(): Promise<void> {
    if (this.form.invalid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    try{
      await this.autenticacaoService.login(
        this.form.value
      );
    } catch (excecao: any) {
      const mensagemErro = excecao?.error?.erro || 'Erro ao realizar o login!';
      alert(mensagemErro);
    }
  }
}
