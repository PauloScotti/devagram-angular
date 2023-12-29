import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevagramUsuarioApiService } from '../compartilhado/servicos/devagram-api-usuario.service';
import { UsuarioDevagram } from '../compartilhado/tipos/usuario-devagram.type';
import { AutenticacaoService } from '../compartilhado/autenticacao/autenticacao.service';
import { UsuarioLogado } from '../compartilhado/autenticacao/usuario-logado.type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public usuario: UsuarioDevagram | null = null;
  private usuarioLogado?: UsuarioLogado | null;

  constructor(
      private servicoRotaAtual: ActivatedRoute,
      private servicoUsuario: DevagramUsuarioApiService,
      private servicoAutenticacao: AutenticacaoService
    ) {
      this.usuarioLogado = servicoAutenticacao.obterUsuarioLogado();
    }

  ngOnInit(): void {
    this.servicoRotaAtual.params.subscribe(params => {
      let idUsuarioUrl = params['idUsuario'];
      if(idUsuarioUrl === 'pessoal') {
        idUsuarioUrl = this.usuarioLogado?.id;
      }
      this.carregarPerfilDoUsuario(idUsuarioUrl);
    });
  }

  async carregarPerfilDoUsuario(idUsuario?: string) {
    try {
      if(!idUsuario) {
        return;
      }

      this.usuario = await this.servicoUsuario.obterInformacoesDoPerfil(idUsuario)
    } catch (e: any) {
      alert(e.erro?.erro || 'Erro ao carregar o perfil');
    }
  }

}
