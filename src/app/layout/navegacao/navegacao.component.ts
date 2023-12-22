import { Component, OnInit } from '@angular/core';
import { ItemMenu } from './item-menu.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  private mapaDeRotas: ItemMenu = {
    home: {
      img: 'home',
      rotas: []
    },
    publicacao: {
      img: 'publicacao',
      rotas: []
    },
    perfil: {
      img: 'usuario',
      rotas: []
    }
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public obterImagem(menu: string):string {
    const rotasMenu = this.mapaDeRotas[menu];
    const icone = rotasMenu.rotas.includes(this.router.url)
      ? `${rotasMenu.img}Ativo`
      : rotasMenu.img;

      return `assets/imagens/${icone}.svg`;
  }
}
