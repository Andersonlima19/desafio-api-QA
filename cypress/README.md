🧪 Desafio de Automação de Testes de API — Cypress

Este repositório contém a solução para o Desafio de Automação de Testes de API, cujo objetivo é avaliar a capacidade de levantar cenários, estruturar e automatizar testes de uma API REST utilizando boas práticas de QA e automação.

A API utilizada no desafio é a ServeRest, uma API pública voltada para testes:
🔗 https://serverest.dev

🎯 Objetivo do Projeto

Validar endpoints críticos de uma API REST

Automatizar cenários funcionais e negativos

Garantir confiabilidade e regressão automatizada

Implementar pipeline de Integração Contínua (CI)

🛠️ Tecnologias Utilizadas

JavaScript

Cypress (testes de API)

Node.js 18

GitHub Actions (CI)

ServeRest API

📁 Estrutura do Projeto
desafio-api-QA/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── usuarios.cy.js
│   │   ├── produtos.cy.js
│   │   └── carrinhos.cy.js
│   ├── support/
│   │   ├── api.js
│   │   └── commands.js
│   └── fixtures/
│       └── produtos.json
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress.config.js
├── package.json
├── README.md

🔍 Levantamento de Cenários (Mapeamento Completo)
🔐 Login

Login com credenciais válidas

Login com senha inválida

Login com email inválido

Login sem informar campos obrigatórios

Login com usuário inexistente

👤 Usuários

Criar usuário com dados válidos

Criar usuário com email já existente

Listar usuários

Buscar usuário por ID

Excluir usuário

📦 Produtos

Criar produto com token válido

Criar produto sem autenticação

Criar produto com dados inválidos

Listar produtos

Buscar produto por ID

Excluir produto

🛒 Carrinhos

Criar carrinho com produto válido

Criar carrinho sem autenticação

Criar carrinho com produto inexistente

Listar carrinhos

Finalizar carrinho

Cancelar carrinho

✅ Cenários Automatizados (Conforme Desafio)

Foram automatizados 2 cenários críticos de cada funcionalidade, conforme solicitado.

🔐 Login

Login com credenciais válidas

Login com senha inválida

👤 Usuários

Criar usuário com sucesso

Criar usuário com email já cadastrado

📦 Produtos

Criar produto com autenticação válida

Criar produto sem token de autenticação

🛒 Carrinhos

Criar carrinho com produto válido

Criar carrinho sem autenticação

▶️ Execução dos Testes Localmente
Pré-requisitos

Node.js 18+

Git

Passos
git clone https://github.com/SEU_USUARIO/desafio-api-QA.git
cd desafio-api-QA
npm install
npx cypress run


Os testes serão executados em modo headless, focados exclusivamente em API.

🚀 Pipeline de Integração Contínua (CI)

Este projeto possui uma pipeline de Integração Contínua configurada com GitHub Actions, garantindo a execução automática dos testes a cada alteração no código.

▶️ Quando a pipeline é executada

Push para a branch main

Pull Request para a branch main

⚙️ Etapas da Pipeline

Checkout do código

Setup do Node.js (versão 18)

Instalação das dependências

Execução dos testes automatizados de API com Cypress

npx cypress run

✅ Benefícios da Pipeline

Execução automática dos testes

Feedback rápido sobre falhas

Redução de regressões

Garantia de qualidade contínua

Padrão profissional utilizado em ambientes corporativos

📌 Observações Técnicas

Os testes utilizam dados dinâmicos, evitando dependência de massa fixa

Tokens são gerados automaticamente via login

Projeto estruturado visando manutenibilidade e escalabilidade

Foco em testes críticos e de maior risco