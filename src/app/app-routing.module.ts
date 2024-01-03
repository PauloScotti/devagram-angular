import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './compartilhado/autenticacao/autenticacao.guard';

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'perfil',
    canActivate: [AutenticacaoGuard],
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: 'publicacao',
    canActivate: [AutenticacaoGuard],
    loadChildren: () => import('./publicacao/publicacao.module').then(m => m.PublicacaoModule)
  },
  {
    path: '',
    canActivate: [AutenticacaoGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
