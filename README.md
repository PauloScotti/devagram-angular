# Devagram Angular

Front-end em Angular da rede social Devagram (projeto do curso da Devaria): cadastro, login, feed, curtidas, comentários, busca de usuários, perfil, seguir e publicação de fotos.

Consome a API do [devagram-nextjs](https://github.com/PauloScotti/devagram-nextjs).

## Stack

Angular 22 (NgModules, formulários reativos), RxJS, SCSS, Vitest.

## Como rodar

Requisito: Node 20.19+ ou 22.12+.

```bash
npm install
```

```bash
npm start
```

Abre em `http://localhost:4200`. A URL da API fica em `src/environments/environment.ts` (desenvolvimento) e `environment.prod.ts` (build de produção).

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm start` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/devagram-angular` |
| `npm test` | Testes unitários (Vitest) |

## Comportamento

- Token expirado ou inválido (resposta 401) encerra a sessão e volta para o login.
- O indicador de carregamento só aparece durante requisições.
- Senha nova precisa de pelo menos 8 caracteres. O login aceita senhas antigas mais curtas.
