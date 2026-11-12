import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { CompartilhadoModule } from '../../../compartilhado.module';
import { confirmacaoSenha } from '../../../validadores/confirmacao-senha.validator';
import { InputPublicoComponent } from './input-publico.component';

describe('InputPublicoComponent.obterMensagemErro', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [CompartilhadoModule] }));

  const mensagem = (controle: FormControl) => {
    const componente = TestBed.createComponent(InputPublicoComponent).componentInstance;
    componente.referenciaFormulario = controle;
    return componente.obterMensagemErro();
  };

  it('sem erro não mostra mensagem', () => {
    expect(mensagem(new FormControl('ok', Validators.required))).toBe('');
  });

  it('explica cada tipo de erro', () => {
    expect(mensagem(new FormControl('', Validators.required))).toBe('Campo obrigatorio!');
    expect(mensagem(new FormControl('x', Validators.email))).toBe('Insira um e-mail válido!');
    expect(mensagem(new FormControl('1234', Validators.minLength(8)))).toBe('Deve ter no mínino 8 caracteres!');
  });

  it('avisa quando a confirmação não confere', () => {
    const controle = new FormControl('a', confirmacaoSenha());
    controle.setErrors({ confirmacaoSenha: true });
    expect(mensagem(controle)).toBe('As senhas não conferem!');
  });
});
