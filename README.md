# Sistema de Login

Projeto acadêmico de uma página de login com HTML, CSS e JavaScript, desenvolvido para praticar controle de versão com Git e GitHub.

## Funcionalidades

- Tela de login com validação de campos vazios
- Login de teste: usuário `adm` e senha `123`
- Dashboard com menu e mensagem de boas-vindas após o login
- Tela de cadastro de novos usuários com validação dos campos

## Estrutura de arquivos

| Arquivo          | Descrição              |
| ---------------- | ---------------------- |
| `index.html`     | Tela de login          |
| `style.css`      | Estilos do projeto     |
| `script.js`      | Validação do login     |
| `dashboard.html` | Painel principal       |
| `cadastro.html`  | Formulário de cadastro |
| `cadastro.js`    | Validação do cadastro  |

## Branches utilizadas

| Tipo            | Nome                       | Base      | Finalidade                 |
| --------------- | -------------------------- | --------- | -------------------------- |
| Principal       | `main`                     | -         | Código estável e publicado |
| Desenvolvimento | `develop`                  | `main`    | Desenvolvimento ativo      |
| Feature         | `feature/validacao-campos` | `develop` | Validação do login         |
| Feature         | `feature/dashboard`        | `develop` | Painel principal           |
| Feature         | `feature/cadastro-usuario` | `develop` | Tela de cadastro           |
| Hotfix          | `hotfix/erro-html`         | `main`    | Correção da tag `<button>` |
| Release         | `release/v1.1.0`           | `develop` | Preparação da versão 1.1.0 |

## Como executar

Abra o `index.html` no navegador ou acesse a versão publicada no GitHub Pages.
