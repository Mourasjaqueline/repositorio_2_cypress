# 🧪 Automação de Testes de Interface com Cypress

## 📌 Sobre o Projeto

Este repositório contém a automação de testes **End-to-End (E2E)** utilizando **Cypress**.

O objetivo é validar o fluxo  de compra da aplicação **Sauce Demo**, garantindo que a principal jornada do usuário funcione corretamente.

O projeto também está integrado ao **GitHub Actions**, permitindo execução automática dos testes a cada atualização no repositório.

URL: https://www.saucedemo.com/
---

## 🧪 Estratégia de Testes

A automação valida a jornada principal do usuário na aplicação.

Os cenários implementados incluem:

* Autenticação de usuário
* Validação de erros de login
* Navegação na vitrine de produtos
* Adição e remoção de itens no carrinho
* Fluxo de checkout
* Finalização do pedido

Também foram implementados **cenários negativos**, incluindo:

* Login com campos obrigatórios em branco
* Tentativa de login com usuário bloqueado
* Validação das mensagens de erro exibidas

---

## 🛠️ Tecnologias Utilizadas

* **Cypress**
* **JavaScript**
* **Page Object Model (POM)**
* **GitHub Actions (CI/CD)**

---

## 📂 Estrutura do Projeto

```
cypress
│
├── e2e
├── fixtures
└── support
    └── pages

.github
└── workflows
```

---

## ⚙️ Pré-requisitos

Para executar o projeto é necessário possuir instalado:

* Node.js 18+
* Cypress

---

## 🚀 Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/Mourasjaqueline/repositorio_2_cypress.git
```

Instale as dependências:

```bash
npm install
```

Executar os testes em modo interativo:

```bash
npx cypress open
```

Executar os testes via terminal:

```bash
npx cypress run
```

---

## 🔄 Integração Contínua (CI)

O projeto possui pipeline configurada no **GitHub Actions**.

A cada **push** ou **pull request**, a pipeline executa automaticamente:

1. Instalação das dependências
2. Execução dos testes Cypress
3. Geração das evidências de execução

---

## 📊 Evidências da Execução

Durante a execução dos testes são gerados automaticamente:

* **Vídeos da execução**
* **Screenshots em caso de falha**

Esses arquivos ficam disponíveis como **Artifacts** na aba **Actions** do repositório.

---

## 👩‍💻 Autora

**Jaqueline Moura**
