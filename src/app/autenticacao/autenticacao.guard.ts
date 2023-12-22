import { AutenticacaoService } from './autenticacao.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
    constructor(
        private servicoAutenticacao: AutenticacaoService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (this.servicoAutenticacao.estaLogado()) {
            return true;
        }

        return this.router.parseUrl('login');
    }
    
}