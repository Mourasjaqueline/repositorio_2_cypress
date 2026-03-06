# 🧪 Automação Sauce Demo - Cypress E2E

Este projeto contém a automação de testes **End-to-End (E2E)** para o fluxo crítico de compras da plataforma **Sauce Demo**, utilizando boas práticas modernas de engenharia de software e automação de testes com foco em UI.

O objetivo é validar o funcionamento do fluxo principal de compra, desde o login até a finalização do pedido, garantindo a confiabilidade das principais jornadas do usuário.

---

# 📌 Cenários de Teste (BDD & Integridade de Fluxo)

Os testes foram estruturados seguindo o estilo **BDD (Behavior-Driven Development)**, priorizando a robustez da automação.

### 🔎 Validação de Navegação Crítica

Para garantir a confiabilidade do fluxo, o script realiza uma validação de **checkpoint em cada transição de tela**.

O teste confirma a sincronização da aplicação antes de interagir com os elementos através de:

- Validação do elemento **title**
- Validação da **URL da página**

---

### 🔐 Autenticação

Validação do fluxo de login utilizando credenciais válidas.

Inclui verificações de:

- Redirecionamento correto para a **vitrine de produtos**
- Tratamento de erros para **campos obrigatórios**

---

### 🛒 Fluxo de Checkout Completo

O fluxo principal de compra contempla as seguintes etapas:

- Adição de produtos na vitrine
- Gerenciamento de itens no carrinho
- Remoção estratégica de produtos 
- Preenchimento seguro das informações de entrega via Fixtures
- Continuidade do checkout
- Finalização do pedido com validação da mensagem de sucesso

---

### 🔄 Ciclo de Retorno

Após a finalização da compra, o teste também valida o fluxo de retorno:

- Retorno à vitrine utilizando o botão Back Home
- Validação final da URL da aplicação
- Verificação de que o contador do carrinho foi zerado

---

# 🛠️ Tecnologias Utilizadas

- **Cypress** → Framework de automação de testes E2E  
- **JavaScript** → Linguagem utilizada para implementação dos testes  
- **Page Object Model (POM)** → Arquitetura para organização e reutilização de código  
- **GitHub Actions** → Pipeline de Integração Contínua (CI)

---

# 🏗️ Estrutura do Projeto


cypress/
├── e2e/ # Scripts de teste (cenários automatizados)
├── fixtures/ # Massa de dados (arquivos JSON)
└── support/
└── pages/ # Page Objects (elementos e ações)

.github/
└── workflows/ # Configuração da pipeline CI/CD


---

# 🚀 Como Executar o Projeto

## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- **Node.js** versão 18 ou superior
- **Cypress** versão 13.x

---

## 📥 Clonar o Repositório

```bash
git clone https://github.com/Mourasjaqueline/repositorio_2_cypress.git
 Instalar Dependências
npm install
 Execução dos Testes
Modo Interativo (Interface do Cypress)

Executa os testes através da interface gráfica do Cypress.

npx cypress open
Modo Headless (Execução via Terminal)

Executa os testes diretamente no terminal.

Durante essa execução:

vídeos da execução são gerados automaticamente

screenshots são capturados em caso de falha

npx cypress run


📈 Integração Contínua (CI)

O projeto está integrado ao GitHub Actions.

A cada push e pull request na branch master, os testes são executados automaticamente pela pipeline.

📊 Evidências de Execução

Durante a execução na pipeline são gerados:

🎥 Vídeos da execução dos testes

📸 Screenshots em caso de falha

Esses arquivos ficam disponíveis como Artifacts na aba Actions do repositório.


```
## Autora: Jaqueline Moura


