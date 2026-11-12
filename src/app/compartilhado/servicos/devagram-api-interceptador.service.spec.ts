import { HttpClient, provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoadingService } from '../componentes/loading/loading.service';
import { DevagramApiIntercetador } from './devagram-api-interceptador.service';

describe('DevagramApiIntercetador', () => {
  let http: HttpClient;
  let backend: HttpTestingController;
  let navegar: ReturnType<typeof vi.fn>;
  let estadosLoading: boolean[];

  beforeEach(() => {
    localStorage.clear();
    navegar = vi.fn();
    estadosLoading = [];
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        { provide: HTTP_INTERCEPTORS, useClass: DevagramApiIntercetador, multi: true },
        { provide: Router, useValue: { navigateByUrl: navegar } }
      ]
    });
    TestBed.inject(LoadingService).escutar((exibir: boolean) => estadosLoading.push(exibir));
    http = TestBed.inject(HttpClient);
    backend = TestBed.inject(HttpTestingController);
  });

  afterEach(() => backend.verify());

  it('envia o token e esconde o loading ao terminar', () => {
    localStorage.setItem('token', 'abc');
    http.get('/api/feed').subscribe();

    const req = backend.expectOne('/api/feed');
    expect(req.request.headers.get('Authorization')).toBe('Bearer abc');
    req.flush([]);

    expect(estadosLoading).toEqual([true, false]);
  });

  it('401 com token encerra a sessão e volta para o login', () => {
    localStorage.setItem('token', 'expirado');
    localStorage.setItem('nome', 'Ana');
    http.get('/api/feed').subscribe({ error: () => {} });

    backend.expectOne('/api/feed').flush({ erro: 'Token inválido' }, { status: 401, statusText: 'Unauthorized' });

    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('nome')).toBeNull();
    expect(navegar).toHaveBeenCalledWith('/login');
    expect(estadosLoading).toEqual([true, false]);
  });

  it('401 no login (sem token) só repassa o erro', () => {
    let status = 0;
    http.post('/api/login', {}).subscribe({ error: e => (status = e.status) });

    backend.expectOne('/api/login').flush({ erro: 'Usuário ou senha inválidos' }, { status: 401, statusText: 'Unauthorized' });

    expect(status).toBe(401);
    expect(navegar).not.toHaveBeenCalled();
  });
});
