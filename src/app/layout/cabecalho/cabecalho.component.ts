import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { DevagramUsuarioApiService } from 'src/app/compartilhado/servicos/devagram-api-usuario.service';
import { UsuarioDevagram } from 'src/app/compartilhado/tipos/usuario-devagram.type';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  public termoPesquisado: string = '';
  public resultadoDaPesquisa: Array<UsuarioDevagram> = [];
  constructor(
      private router: Router,
      private apiUsuarioDavegram: DevagramUsuarioApiService,
      private servicoAutenticacao: AutenticacaoService
    ) { }

  ngOnInit(): void {
  }

  public irParaHome() {
    this.router.navigateByUrl('/')
  }

  public async pesquisarUsuarios(): Promise<any> {
    if(this.termoPesquisado.length < 3){
      return;
    }

    try{
      const usuariosRetornados = await this.apiUsuarioDavegram.pesquisarUsuarios(
          this.termoPesquisado
        );

        const usuarioLogado = await this.servicoAutenticacao.obterUsuarioLogado();
        this.resultadoDaPesquisa = usuariosRetornados['filter']((ur: { _id: string | undefined; }) => ur._id !== usuarioLogado?.id);

        console.log(usuariosRetornados);
    } catch (e: any) {
      if(e?.status !== 400) {
        alert(e?.error.erro || 'Erro ao pesquisar usuários');
      }
    }
  }

  public irParaOPerfilDoUsuario(idUsuario: string):void {
    console.log({idUsuario});
  }

}
