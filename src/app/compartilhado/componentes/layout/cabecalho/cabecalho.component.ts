import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../../autenticacao/autenticacao.service';
import { DevagramUsuarioApiService } from '../../../servicos/devagram-api-usuario.service';
import { UsuarioDevagram } from '../../../tipos/usuario-devagram.type';

@Component({
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
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
    this.resultadoDaPesquisa = [];
    if(this.termoPesquisado.length < 3){
      return;
    }

    try{
      const usuariosRetornados = await this.apiUsuarioDavegram.pesquisarUsuarios(
          this.termoPesquisado
        );

        const usuarioLogado = await this.servicoAutenticacao.obterUsuarioLogado();
        this.resultadoDaPesquisa = usuariosRetornados['filter']((ur: { _id: string | undefined; }) => ur._id !== usuarioLogado?.id);
    } catch (e: any) {
      if(e?.status !== 400) {
        alert(e?.error?.erro || 'Erro ao pesquisar usuários');
      }
    }
  }

  public irParaOPerfilDoUsuario(idUsuario: string):void {
    this.resultadoDaPesquisa = [];
    this.router.navigate(['perfil', idUsuario]);
  }

}
