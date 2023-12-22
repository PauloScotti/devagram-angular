import { Injectable } from '@angular/core';
import { DevagramApiService } from './devagram-api.service';
import { UsuarioDevagram } from '../tipos/usuario-devagram.type';

@Injectable({
  providedIn: 'root'
})
export class DevagramUsuarioApiService extends DevagramApiService {
    public buscarDadosUsuario(): Promise<UsuarioDevagram> {
        return this.get('usuario');
    }

    public pesquisarUsuarios(filtro: string): Promise<UsuarioDevagram> {
        return this.get('pesquisa?filtro=' + filtro);
    }
  
}
