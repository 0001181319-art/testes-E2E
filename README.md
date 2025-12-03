## Por que os testes foram feitos dessa forma?

Os testes E2E foram criados para simular o uso real da aplicação, garantindo que as duas páginas principais
(Home e Cadastro) funcionem de forma correta, exibam os elementos necessários e façam as validações esperadas.

---

* Abri a pasta do projeto no Explorador de Arquivos.
* Cliquei na barra de endereço da pasta e digitei:  CMD
  (isso abriu o Prompt de Comando já dentro da pasta correta)

* No CMD, instalei o Cypress:
    npm install cypress --save-dev

* Depois abri o Cypress com:
    npx cypress open

* O Cypress abriu a janela e pude rodar os testes normalmente.

---

## 📝 Testes da página de Cadastro (cadastro.cy.js)

### 1. Verificar se todos os elementos aparecem
Esse teste garante que a página carrega tudo que o usuário precisa para preencher o formulário:
campos de texto, botões e links.  
Se algum desses itens não aparecer, o cadastro não pode ser realizado.

### 2. Teste de senhas diferentes
Foi criado um teste que digita duas senhas diferentes para garantir que a aplicação realmente exibe
a mensagem de erro correta.  
Esse tipo de validação é essencial para evitar cadastros inválidos e melhorar a experiência do usuário.

### 3. Teste de senha com menos de 8 caracteres
Esse teste confirma que a regra de segurança da aplicação está funcionando.  
Digitamos uma senha curta e tentamos cadastrar, verificando se a mensagem de erro é exibida no elemento `#erro`.

### 4. Por que usar `cy.get()` e `cy.contains()`
- `cy.get()` é usado para capturar elementos específicos, como os inputs.
- `cy.contains()` verifica se textos importantes realmente aparecem na tela.

### 5. Por que usar `beforeEach()`
O `beforeEach()` recarrega a página antes de cada teste para garantir que todos começam nas mesmas condições,
sem que um teste influencie o outro.

---

## 🏠 Testes da página Home (home.cy.js)

### 1. Testar a navbar
Aqui é validado se a navbar carrega corretamente com os textos “Connext”, “Home” e “Login / Cadastro”.  
Isso é importante porque a navbar é o principal meio de navegação da página.

### 2. Testar a seção inicial (Hero)
O teste verifica se os textos principais da seção de boas-vindas estão aparecendo corretamente.
Isso garante que o usuário entende de imediato o propósito da aplicação.

### 3. Testar a seção “Sobre o Projeto”
O objetivo é confirmar que os textos informativos da página estão sendo exibidos, já que essa parte explica
sobre o sistema.

### 4. Testar o link “Login / Cadastro”
Esse teste garante que o botão realmente leva para a página de login/cadastro.
É uma verificação simples, mas fundamental para o fluxo de navegação.

---

## ✔ Resumo geral
Os testes foram feitos desse jeito porque:
- simulam o comportamento real do usuário  
- verificam se os elementos principais estão na tela  
- validam mensagens de erro e regras de negócio  
- garantem navegabilidade entre páginas  
- ajudam a manter consistência e funcionalidade da interface  

Tudo isso deixa a aplicação mais confiável e facilita encontrar erros antes que o usuário final encontre.
