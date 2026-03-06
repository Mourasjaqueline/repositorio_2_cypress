# Sauce Demo Automation - Cypress E2E

Este projeto contém a automação de testes End-to-End (E2E) para a plataforma Sauce Demo. O objetivo é garantir a estabilidade do fluxo crítico de autenticação e compra, simulando o comportamento real do usuário.



🎯 Objetivos do Teste
O foco principal desta automação é validar o Gerenciamento Dinâmico de Estado do Carrinho, cobrindo os seguintes cenários:

Autenticação: Login com credenciais válidas e tratamento de restrições.

Fluxo de Compra Adaptativo:

Adição de múltiplos produtos (3 itens) na vitrine.

Remoção de item diretamente na tela de produtos (vitrine).

Remoção de item adicional dentro da página do carrinho.

Checkout Completo: Preenchimento de informações do cliente via massa de dados e finalização do pedido.

Garantia Visual: Validação da mensagem de conclusão, de que o carrinho é limpo e o sistema retorna ao estado inicial após a compra.



🛠️ Tecnologias Utilizadas
Cypress: Framework principal para automação E2E.

JavaScript (ES6+): Linguagem de programação utilizada para os scripts.

Node.js: Ambiente de execução para o gerenciamento de pacotes.



📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Node.js (versão 14 ou superior).

VS Code (ou sua IDE de preferência).

Um gerenciador de pacotes como npm ou yarn.



🚀 Instalação e Execução
Clone o repositório:

Bash
git clone https://github.com/

Instale as dependências:

Bash
npm install
Executar os testes em Modo Interativo (Interface Visual):

Bash
npx cypress open
Executar os testes em Modo Headless (Terminal/CI):

Bash
npx cypress run



📂 Estrutura do Projeto
Utilizei uma organização hierárquica que facilita a manutenção e evita erros de referência:

YAML
cypress/
  ├── 🧪 e2e/                 
  │   ├── checkout.cy.js      # Fluxo E2E de compra e checkout
  │   └── login.cy.js         # Testes de autenticação
  ├── 📋 fixtures/            
  │   └── checkoutData.json   # Dados para preenchimento de checkout
  ├── 🏗️ support/             # Configurações e comandos globais
  │   ├── 🧩 pages/          
  │   │   ├── LoginPage.js    # Ações da tela de Login
  │   │   ├── ProductsPage.js # Gestão da vitrine
  │   │   ├── CartPage.js     # Validações e ações no carrinho
  │   │   └── CheckoutPage.js # Formulários e finalização
  │   └── e2e.js              # Configuração global de suporte
  └── ⚙️ cypress.config.js    # Configurações do ambiente e timeouts

  



  
🏆 Boas Práticas Adotadas
Page Object Model (POM): Encapsulamento de elementos e ações em classes específicas, reduzindo a duplicação de código.

Seletores Estáveis: Uso exclusivo de atributos data-test para garantir que a automação não quebre com mudanças de CSS.

Data-Driven Testing: Separação total da massa de dados em arquivos fixtures, permitindo alterar dados do teste sem modificar o código.

Asserções de UI: Validação constante de títulos de página (.title) e estados visuais para garantir a resiliência do fluxo.



# Desenvolvido por: Jaqueline Moura
