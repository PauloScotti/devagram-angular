import { Component, OnInit } from '@angular/core';
import { Postagem } from './postagem.type';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { UsuarioLogado } from 'src/app/autenticacao/usuario-logado.type';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public usuarioLogado: UsuarioLogado | null;
  public postagens: Array<Postagem> = [
    {
      usuario: {
        nome: 'Paulo Scotti',
      },
      comentarios: [{
        nome: 'Paulo Scotti',
        comentario: 'Top demais'
      }],
      foto: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/617A/production/_125745942_gettyimages-1230511216.jpg',
      quantidadeCurtidas: 32,
      descricao: 'Olá mundo! Eu sou o Daniel Castello. Aqui pra vocês, Dani! A minha carreira foi sempre focada em soluções digitais e tecnologia.'
    } as Postagem,
    {
      usuario: {
        nome: 'Daniel Scotti'
      },
      comentarios: [{
        nome: 'Paulo Scotti',
        comentario: 'Top demais'
      }],
      foto: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/617A/production/_125745942_gettyimages-1230511216.jpg',
      quantidadeCurtidas: 12,
      descricao: 'Olá mundo! Eu sou o Kaique Jesus, aqui pra vocês, Ka! blablablablabla blablablablabla blablablablabla blablablablabla'
    } as Postagem
  ];

  constructor(private servicoAutenticacao: AutenticacaoService) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado()
  }

  ngOnInit(): void {
  }

}
