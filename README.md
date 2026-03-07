# 🧪 Automação de Testes de Interface com Cypress

Este projeto contém a automação de testes End-to-End (E2E) para o fluxo crítico de compras da plataforma Sauce Demo, utilizando boas práticas de engenharia de software e automação de testes.

O objetivo é validar o funcionamento da jornada principal do usuário, desde o login até a finalização da compra, garantindo que os principais fluxos do sistema permaneçam estáveis ao longo das evoluções da aplicação.

---

## 🔎 Validação de Navegação Crítica

Para garantir a confiabilidade da automação, o script realiza uma validação de checkpoint em cada transição de tela.

Antes de interagir com elementos da página, o teste confirma a sincronização da aplicação através de:

* Validação do elemento **title**
* Validação da **URL da página**
* Confirmação de que a tela correta foi carregada

Essa abordagem reduz falhas causadas por problemas de sincronização da interface.

---

## 🔐 Autenticação

Validação do fluxo de login utilizando credenciais válidas.

O teste verifica:

* Redirecionamento correto para a **vitrine de produtos**
* Validação de **campos obrigatórios**
* Carregamento correto da página inicial da aplicação

Validação do fluxo de logi utilizando credenciais inválidas ou em branco

* Tentativa de login com campos obrigatórios em branco
* Tentativa de login com usuário bloqueado
* Validação de que o acesso não é permitido
* Verificação da mensagem de erro exibida ao usuário

---

## 🛒 Fluxo de Checkout Completo

O fluxo principal de compra contempla as seguintes etapas:

* Adição de produtos na vitrine
* Gerenciamento de itens no carrinho
* Remoção estratégica de produtos na vitrine e no carrinho
* Preenchimento seguro das informações de entrega utilizando **fixtures**
* Continuação do fluxo de checkout
* Finalização do pedido
* Validação da mensagem de sucesso da compra

---

## 🔄 Ciclo de Retorno

Após a finalização da compra, o teste também valida o fluxo de retorno da aplicação:

* Retorno à vitrine utilizando o botão **Back Home**
* Validação final da **URL da aplicação**
* Verificação de que o **contador do carrinho foi zerado**

---

# 🛠️ Tecnologias Utilizadas

* **Cypress** → Framework de automação de testes E2E
* **JavaScript** → Linguagem utilizada para implementação dos testes
* **Page Object Model (POM)** → Arquitetura para organização e reutilização de código
* **GitHub Actions** → Pipeline de Integração Contínua (CI)

---

# 🏗️ Estrutura do Projeto

A automação foi organizada seguindo boas práticas de separação de responsabilidades.

```
cypress/
├── e2e/                 # Cenários de teste automatizados
├── fixtures/            # Massa de dados em arquivos JSON
└── support/
    └── pages/           # Page Objects (elementos e ações reutilizáveis)

.github/
└── workflows/           # Configuração da pipeline CI/CD
```

Essa estrutura facilita:

* manutenção do código
* reutilização de ações
* organização da automação

---

# ⚙️ Boas Práticas Aplicadas

Durante o desenvolvimento da automação foram aplicadas algumas práticas importantes:

* Utilização de **Page Object Model (POM)** para melhor organização do código
* Separação de **massa de dados utilizando Fixtures**
* Validação de **checkpoints de navegação**
* Sincronização da aplicação antes das interações
* Escrita de testes focada na **jornada real do usuário**

---

# 🚀 Como Executar o Projeto

## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

* **Node.js** versão 18 ou superior
* **Cypress** versão 13.x

---

## 📥 Clonar o Repositório

```bash
git clone https://github.com/Mourasjaqueline/repositorio_2_cypress.git
```

Acesse a pasta do projeto:

```bash
cd repositorio_2_cypress
```

---

## 📦 Instalar Dependências

```bash
npm install
```

---

## ▶️ Execução dos Testes

### Modo Interativo (Interface do Cypress)

Executa os testes através da interface gráfica do Cypress.

```bash
npx cypress open
```

---

### Modo Headless (Execução via Terminal)

Executa os testes diretamente no terminal.

Durante essa execução:

* 🎥 Vídeos da execução são gerados automaticamente
* 📸 Screenshots são capturados em caso de falha

```bash
npx cypress run
```

---

# 🔄 Integração Contínua (CI)

O projeto está integrado ao **GitHub Actions**.

A cada **push** ou **pull request** na branch principal, a pipeline executa automaticamente:

1. Instalação das dependências
2. Execução dos testes automatizados
3. Geração de evidências da execução

---

# 📊 Evidências de Execução

Durante a execução da pipeline são gerados automaticamente:

🎥 **Vídeos da execução dos testes**

📸 **Screenshots em caso de falha**

Esses arquivos ficam disponíveis como **Artifacts** na aba **Actions** do repositório no GitHub.

---

# 👩‍💻 Autora

**Jaqueline Moura**
