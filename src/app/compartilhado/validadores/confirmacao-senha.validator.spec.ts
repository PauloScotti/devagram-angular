import { FormControl, FormGroup } from '@angular/forms';
import { confirmacaoSenha } from './confirmacao-senha.validator';

describe('confirmacaoSenha', () => {
  const criarForm = (senha: string, confirmacao: string) => {
    const form = new FormGroup({
      senha: new FormControl(''),
      confirmacaoSenha: new FormControl('', confirmacaoSenha())
    });
    form.setValue({ senha, confirmacaoSenha: confirmacao });
    form.controls.confirmacaoSenha.updateValueAndValidity();
    return form;
  };

  it('aceita senhas iguais', () => {
    expect(criarForm('segredo-forte', 'segredo-forte').controls.confirmacaoSenha.errors).toBeNull();
  });

  it('rejeita senhas diferentes', () => {
    expect(criarForm('segredo-forte', 'outra').controls.confirmacaoSenha.errors).toEqual({ confirmacaoSenha: true });
  });
});
