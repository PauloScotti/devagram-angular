import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/compartilhado/autenticacao/autenticacao.service';
import { DevagramUsuarioApiService } from 'src/app/compartilhado/servicos/devagram-api-usuario.service';
import { UsuarioDevagram } from 'src/app/compartilhado/tipos/usuario-devagram.type';

@Component({
  selector: 'app-cabecalho-perfil',
  templateUrl: './cabecalho-perfil.component.html',
  styleUrls: ['./cabecalho-perfil.component.scss']
})
export class CabecalhoPerfilComponent implements OnInit {

  @Input() usuario: UsuarioDevagram | null = null;
  public estaPerfilPessoal: boolean = false;

  constructor(
      private router: Router,
      private servicoUsuario: DevagramUsuarioApiService,
      private servicoAutenticacao: AutenticacaoService
    ) { }

  ngOnInit(): void {
    if(this.router.url === '/perfil/pessoal') {
      this.estaPerfilPessoal = true;
    }
  }

  public async manipularCliqueBotaoPrincipal(): Promise<void> {
    if(this.estaPerfilPessoal) {
      this.redirecionarParaTelaDeEdicaoDePerfil();
      return;
    }

    await this.alternarSeguir();
  }

  public redirecionarParaTelaDeEdicaoDePerfil(): void {
    this.router.navigateByUrl('perfil/pessoal/editar');
  }

  private async alternarSeguir() {
    if(!this.usuario) {
      return;
    }

    try {
      await this.servicoUsuario.alternarSeguir(this.usuario?._id);
      this.usuario.segueEsseUsuario = !this.usuario.segueEsseUsuario;
    } catch (e:any) {
      alert(e.error?.erro || 'Erro ao seguir/deixar de seguir o usuário');
    }
  }

  public voltarParaHome() {
    this.router.navigateByUrl('/');
  }

  public obterTextoBotaoPrincipal(): string {
    if(this.usuario?.segueEsseUsuario) {
      return 'Deixar de seguir';
    }
    
    if (this.estaPerfilPessoal) {
      return 'Editar perfil'
    }

    return 'Seguir';
  }

  public obterCorBotaoPrincipal(): string {
    if(this.usuario?.segueEsseUsuario || this.estaPerfilPessoal) {
      return 'outline';
    }

    return 'primaria';
  }

  public logout() :void {
    this.servicoAutenticacao.logout();
  }

}
