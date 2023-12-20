import { HttpClient } from '@angular/common/http';
import { RespostaLoginDevagram } from './resposta-login-devagram.type';
import { CredenciaisDevagram } from './credenciais-devagram.type';
import { Inject, Injectable } from '@angular/core';
import { DevagramApiService } from '../compartilhado/servicos/devagram-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends DevagramApiService {

  constructor(
    protected _http: HttpClient,
    @Inject('DEVAGRAM_URL_API') private _devagramUrlApi: string,
    private router: Router
  ) {
    super(_http, _devagramUrlApi);
  }

  async login(credenciais: CredenciaisDevagram): Promise<void> {
    const respostaLogin: RespostaLoginDevagram = await this.post('login', credenciais);
    if (!respostaLogin.token) {
      throw new Error('Login inválido!');
    }

    localStorage.setItem('token', respostaLogin.token);
    localStorage.setItem('nome', respostaLogin.nome);
    localStorage.setItem('email', respostaLogin.email);

    // TODO: pegar os dados complementares do usuario logado

    this.router.navigateByUrl('/');
  }

  estaLogado(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    // TODO: remover os dados complementares

    this.router.navigateByUrl('/login');
  }

  // TODO: criar metodo extra para devolver as informacoes do usuario logado
}
