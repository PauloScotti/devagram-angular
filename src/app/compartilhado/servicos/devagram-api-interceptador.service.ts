import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../componentes/loading/loading.service';
import { limparSessao } from '../autenticacao/sessao';

@Injectable({
  providedIn: 'root'
})
export class DevagramApiIntercetador implements HttpInterceptor {
  private requisicoesEmAndamento = 0;

  constructor(
    private loadingService: LoadingService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requisicoesEmAndamento++;
    if (this.requisicoesEmAndamento === 1) {
      this.loadingService.exibir();
    }

    const token = localStorage.getItem('token');
    const novaReq = token
      ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
      : req;

    return next.handle(novaReq).pipe(
      catchError((erro: unknown) => {
        // Token expirado ou inválido: encerra a sessão em vez de deixar a tela quebrada.
        if (token && erro instanceof HttpErrorResponse && erro.status === 401) {
          limparSessao();
          this.router.navigateByUrl('/login');
        }
        return throwError(() => erro);
      }),
      finalize(() => {
        this.requisicoesEmAndamento--;
        if (this.requisicoesEmAndamento === 0) {
          this.loadingService.ocultar();
        }
      })
    );
  }
}
