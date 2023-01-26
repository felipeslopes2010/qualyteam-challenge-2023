<div align="center">
  <img src="https://media.licdn.com/dms/image/C4D16AQEJbhzbDWDZwQ/profile-displaybackgroundimage-shrink_350_1400/0/1659356205485?e=1679529600&v=beta&t=p5jmdFzjCrnk22bXFPd9NA-eXtkMWIyumyHVJJN0ehU">


![GitHub top language](https://img.shields.io/github/languages/top/felipeslopes2010/qualyteam-challenge-2023)<space><space>
![Lines of Code](https://img.shields.io/tokei/lines/github/felipeslopes2010/qualyteam-challenge-2023)<space><space>
![GitHub repo size](https://img.shields.io/github/repo-size/felipeslopes2010/qualyteam-challenge-2023)<space><space>
![Feito por](https://img.shields.io/badge/feito%20por-Felipe%20Santos-blueviolet)

</div align="center">

# Challenge Qualyteam QA 2023 💻

👋 Olá, seja bem-vindo(a) ao meu teste técnico de QA para a Qualyteam!

## O que foi testado ✏️

O desafio foi criar testes automatizados para as seguintes aplicações:

http://training-wheels-qaninja.herokuapp.com/login

- Mensagem de erro ao não informar nickname

- Mensagem de erro ao não informar senha

- Login com sucesso

- Mensagem de erro ao informar nickname ou senha incorretos

- Mensagem de erro ao tentar acessar URL de área logada diretamente


http://training-wheels-qaninja.herokuapp.com/datepicker

- Verificar se ele está vindo com a data atual

- Limpar datepicker e trazer data atual através de atalho

- Colocar a data do seu aniversário

- Colocar o dia atual no mês anterior

## Ferramentas Utilizadas 🛠️
- Cypress 12.3.0
- Faker-JS 7.6.0 para criação de dados falsos no formulário de testes
- CI/CD Pipeline por meio do GitHub Actions utilizando Environment Secrets em dados sensíveis

## Como reproduzir 🧪
1. Clonar o repositório em uma pasta de sua preferência

2. Criar um arquivo com o nome **cypress.env.json** na raiz do projeto

3. Preencher o arquivo com os seguintes dados:

     {
          "user_name": "papitorocks",
         "user_password": "pwd123"
     }

4. Abrir o Terminal do VS Code (https://code.visualstudio.com/Download)

5. Instalar o Cypress e outras libs por meio do comando:

      ***npm install, ou também npm i @faker-js/faker@7.6.0 cypress@12.3.0 -D***

6. Executar o comando no terminal do VS Code:

      ***npx cypress open***, ou ***npm run cy:open***

7. Após aplicação abrir, selecionar a opção 'E2E Testing' e selecionar o navegador de sua preferência

8. Clicar na aba 'Specs' e selecionar o teste que deseja executar

### Performance

Também podemos executar os testes em modo Headless para ganharmos ainda mais performance em nossa execução, basta executar:

***npm test***, ou ***npx cypress run***

---

## Muito obrigado pela oportunidade! 💖
Foi muito divertido testar as aplicações e colocar em prática o que aprendi ao longo das semanas de estudos neste desafio.

Espero nos vermos em breve, hahaha! Abraços 😉👋


## Contato

<a href="https://www.linkedin.com/in/felipe-santos-lopes-1a873416b/">
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4D03AQGl6O7xKpQnvQ/profile-displayphoto-shrink_800_800/0/1535575091116?e=1679529600&v=beta&t=i8rur39YWY6k370H2SEOn7SpOSJIr_TSMhBuOEosGnA" width="100px;" alt="Felipe Santos"/>
<br />
<br />

[![Linkedin Badge](https://img.shields.io/badge/-Felipe%20Santos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-santos-lopes-1a873416b/)](https://www.linkedin.com/in/felipe-santos-lopes-1a873416b/)
[![Hotmail Badge](https://img.shields.io/badge/-felipeslopes2010@hotmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:felipeslopes2010@hotmail.com)](mailto:felipeslopes2010@hotmail.com)

---
