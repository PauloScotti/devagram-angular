const CHAVES_SESSAO = ['token', 'nome', 'email', 'avatar', 'id'];

export function limparSessao(): void {
  CHAVES_SESSAO.forEach(chave => localStorage.removeItem(chave));
}
