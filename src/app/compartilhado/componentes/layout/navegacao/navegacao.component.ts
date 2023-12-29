import { Component, OnInit } from '@angular/core';
import { ItemMenu } from './item-menu.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  private rotaAtiva: string = 'home';
  private mapaDeRotas: ItemMenu = {
    home: {
      img: 'home',
      rotas: ['/']
    },
    publicacao: {
      img: 'publicacao',
      rotas: ['/publicacao']
    },
    perfil: {
      img: 'usuario',
      rotas: ['/perfil/pessoal', '/perfil/pessoal/editar']
    }
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirecionarPara(menu: string): void {
    const rotasMenu = this.mapaDeRotas[menu];
    this.router.navigateByUrl(rotasMenu.rotas[0]);
  }

  public obterImagem(menu: string):string {
    const rotasMenu = this.mapaDeRotas[menu];

    let icone = rotasMenu.img;

    if(rotasMenu.rotas.includes(this.router.url) || this.rotaAtiva === menu) {
      icone = `${rotasMenu.img}Ativo`;
      this.rotaAtiva = menu;
    }

    return `assets/imagens/${icone}.svg`;
  }
}
