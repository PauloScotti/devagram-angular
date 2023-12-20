import { DevagramApiService } from './../compartilhado/servicos/devagram-api.service';
import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro.type';
import { RespostaApiDevagram } from '../compartilhado/tipos/resposta-api-devagram.type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends DevagramApiService {
  cadastrar(dadosCadastro: Cadastro): Promise<RespostaApiDevagram> {
    return this.post('cadastro', dadosCadastro);
  }
}
