import { environment } from './../../environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BotaoComponent } from './componentes/botao/botao.component';
import { AvatarComponent } from './componentes/avatar/avatar.component';
import { UploadImagemComponent } from './componentes/upload-imagem/upload-imagem.component';
import { InputPublicoComponent } from './componentes/publico/input-publico/input-publico.component';
import { PaginaPublicaComponent } from './componentes/publico/pagina-publica/pagina-publica.component';
import { RodapePaginaPublicaComponent } from './componentes/publico/rodape-pagina-publica/rodape-pagina-publica.component';
import { DevagramApiIntercetador } from './servicos/devagram-api-interceptador.service';
import { FeedComponent } from './componentes/feed/feed.component';
import { PostagemComponent } from './componentes/feed/postagem/postagem.component';
import { CabecalhoComponent } from './componentes/layout/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/layout/rodape/rodape.component';
import { NavegacaoComponent } from './componentes/layout/navegacao/navegacao.component';
import { CabecalhoComAcoesComponent } from './componentes/cabecalho-com-acoes/cabecalho-com-acoes.component';
import { LoadingComponent } from './componentes/loading/loading.component';



@NgModule({
  providers: [
    {
      provide: 'DEVAGRAM_URL_API',
      useValue: environment.devagramUrlApi
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DevagramApiIntercetador,
      multi: true
    }
  ],
  declarations: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
    RodapePaginaPublicaComponent,
    FeedComponent,
    PostagemComponent,
    CabecalhoComponent,
    RodapeComponent,
    NavegacaoComponent,
    CabecalhoComAcoesComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
    RodapePaginaPublicaComponent,
    FeedComponent,
    CabecalhoComponent,
    RodapeComponent,
    CabecalhoComAcoesComponent
  ]
})
export class CompartilhadoModule { }
