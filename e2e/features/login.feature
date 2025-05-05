# language: pt
Funcionalidade: Login no sistema

  Scenario: Login bem-sucedido com credenciais válidas
    Dado que estou na página de login
    Quando preencho o email "usuario@exemplo.com"
    E preencho a senha "senha123"
    E clico no botão de login
    Então devo ser redirecionado para o dashboard
    E ver a mensagem "Bem-vindo, Usuário!"