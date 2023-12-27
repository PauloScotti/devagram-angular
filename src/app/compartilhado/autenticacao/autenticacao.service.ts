import { HttpClient } from '@angular/common/http';
import { RespostaLoginDevagram } from './resposta-login-devagram.type';
import { CredenciaisDevagram } from './credenciais-devagram.type';
import { Inject, Injectable } from '@angular/core';
import { DevagramApiService } from '../servicos/devagram-api.service';
import { Router } from '@angular/router';
import { DevagramUsuarioApiService } from '../servicos/devagram-api-usuario.service';
import { UsuarioLogado } from './usuario-logado.type';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends DevagramApiService {

  constructor(
    protected _http: HttpClient,
    @Inject('DEVAGRAM_URL_API') private _devagramUrlApi: string,
    private router: Router,
    private usuarioService: DevagramUsuarioApiService
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

    const dadosUsuario = await this.usuarioService.buscarDadosUsuario();
    localStorage.setItem("id", dadosUsuario._id);

    if(dadosUsuario.avatar){
      localStorage.setItem("avatar", dadosUsuario.avatar);
    }

    this.router.navigateByUrl('/');
  }

  estaLogado(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('avatar');
    localStorage.removeItem('id');

    this.router.navigateByUrl('/login');
  }

  obterUsuarioLogado(): UsuarioLogado | null {
    if(!this.estaLogado()) {
      return null;
    }

    return {
      id: localStorage.getItem('id'),
      nome: localStorage.getItem('nome'),
      email: localStorage.getItem('email'),
      avatar: localStorage.getItem('avatar'),
    } as UsuarioLogado
  }
}
