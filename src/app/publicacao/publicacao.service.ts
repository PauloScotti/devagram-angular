import { Injectable } from '@angular/core';
import { DevagramApiService } from '../compartilhado/servicos/devagram-api.service';
import { RespostaApiDevagram } from '../compartilhado/tipos/resposta-api-devagram.type';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService extends DevagramApiService {

  public publicar(dadosPublicacao: FormData): Promise<RespostaApiDevagram> {
    return this.post('publicacao', dadosPublicacao);
  }
}
