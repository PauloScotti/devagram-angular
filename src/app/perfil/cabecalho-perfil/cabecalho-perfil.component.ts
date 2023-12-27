import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDevagram } from 'src/app/compartilhado/tipos/usuario-devagram.type';

@Component({
  selector: 'app-cabecalho-perfil',
  templateUrl: './cabecalho-perfil.component.html',
  styleUrls: ['./cabecalho-perfil.component.scss']
})
export class CabecalhoPerfilComponent implements OnInit {

  @Input() usuario: UsuarioDevagram | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public voltarParaHome() {
    this.router.navigateByUrl('/');
  }

}
