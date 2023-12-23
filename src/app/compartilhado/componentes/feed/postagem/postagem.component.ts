import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from '../postagem.type';
import { UsuarioLogado } from 'src/app/autenticacao/usuario-logado.type';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

  @Input() postagem: Postagem = {} as Postagem;
  @Input() usuarioLogado: UsuarioLogado | null = null;

  public quantidadeLinhasTextearea: number = 1;
  public comentarioAtual: string = '';
  public deveExibirCaixaComentario: boolean = false;
  public limiteCaracteresDescricao: number = limiteCaracteresDescricaoPadrao;
  constructor() { }

  ngOnInit(): void {
  }

  public exibirDescricaoCompleta() {
    this.limiteCaracteresDescricao = 99999999;
  }

  public obterImagemComentario() {
    const iconeBase = this.deveExibirCaixaComentario
      ? 'comentarioAtivo'
      : 'comentario';

      return `assets/imagens/${iconeBase}.svg`;
  }

  public alternarExibicaoCaixaDeComentario() {
    this.deveExibirCaixaComentario = !this.deveExibirCaixaComentario;
  }

  public fazerComentario() {
    console.log('fazerComentario')
  }

  public verificarQuantidadeLinhas() {
    this.quantidadeLinhasTextearea = this.comentarioAtual.length > 0
      ? 2
      : 1;
  }

}
