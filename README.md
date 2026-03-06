# Automação Sauce Demo - Cypress E2E//

Este projeto contém a automação de testes de ponta a ponta (E2E) para o fluxo crítico de compras da plataforma Sauce Demo, utilizando práticas modernas de engenharia de software.

Cenários de Teste (BDD & Integridade de Fluxo)
Os testes foram estruturados seguindo o estilo BDD (Behavior-Driven Development), priorizando a clareza das regras de negócio e a robustez da automação:

Validação de Navegação Crítica: Para garantir a confiabilidade do fluxo, o script realiza uma validação de "checkpoint" em cada transição de tela. Através da verificação do elemento title e da URL, o teste confirma a sincronização da aplicação antes de interagir com os elementos.

Autenticação: Validação de login com credenciais válidas, garantindo o redirecionamento correto para a vitrine e tratamento de erros para campos obrigatórios.

Fluxo de Checkout Completo: * Adição de produtos à vitrine com validação visual.

Gerenciamento de itens (remoção estratégica de produtos na vitrine e no carrinho para testar a dinâmica da lista).

Preenchimento seguro de informações de entrega (via Fixtures).

Finalização do pedido com conferência de mensagem de sucesso.

Ciclo de Retorno: Retorno à vitrine via botão "Back Home", com validação final da URL e verificação de que o contador do carrinho foi zerado com sucesso.



🛠️ Tecnologias Utilizadas
Cypress: Framework de testes.

JavaScript: Linguagem de programação.

Page Object Model (POM): Arquitetura para manutenção e reutilização de código.

GitHub Actions: Pipeline de CI para execução automatizada.

🏗️ Estrutura do Projeto

cypress/
  ├── e2e/              # Scripts de teste (Roteiros)
  ├── fixtures/         # Massa de dados (JSON)
  └── support/
      └── pages/        # Page Objects (Elementos e Ações)
.github/workflows/      # Configuração da Pipeline CI/CD




🚀 Como Executar


Pré-requisitos
Node.js: Versão recomendada 18 ou superior.

Cypress: Versão 13.x.

Instalação
Clone o repositório:

Bash
git clone https://github.com/Mourasjaqueline/repositorio_2_cypresss.git



Instale as dependências:

Bash
npm install
Execução dos Testes
Modo Interativo (Interface):

Bash
npx cypress open
Modo Headless (Terminal + Geração de Vídeos):

Bash
npx cypress run




📈 Integração Contínua (CI)
O projeto está integrado ao GitHub Actions. A cada push e pull request nas branches master, os testes são executados automaticamente.

Evidências: Vídeos das execuções e screenshots em caso de falha são salvos como Artifacts na aba Actions do repositório.


# Por: Jaqueline Moura
