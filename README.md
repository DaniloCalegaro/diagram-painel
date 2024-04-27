# Painel de Diagramas 🚀 Em construção...

Projeto de apliação para criação de diagramas com autenticação e interação múltiplos usuários

## Inicialização do Projeto em modo desenvolvedor

- configurar o **.env.local**

  - executar o comando encontrado no settings do projeto no Dashboard Convex que ira configurar o **.env.local** para o Convex. No meu caso este é o link para o settings [Convex Settings](https://dashboard.convex.dev/t/danilocalegaro/diagram-painel/settings)
  - após configurado o **.env.local** para Convex configurar para Clerk, encontrado em:

    > Dashboard Clerk > Developers > APi Keys

  - Exemplo do arquivo final:

  ```env

  CONVEX_DEPLOYMENT=xxxxxxx
  NEXT_PUBLIC_CONVEX_URL=xxxxxxxxx

  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxxxxxxxxxxx
  CLERK_SECRET_KEY=xxxxxxxx

  ```

- inicializar o backend Convex

> npx convex dev

- inicializar o projeto

> npm run dev
