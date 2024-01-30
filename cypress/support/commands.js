// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const cypress = require("cypress");

// trabalhando com criação de comandos personalizados
Cypress.Commands.add("clickAlert", (locator, message) => {
  // criando parametro locator para dizer qual botão clicar
  cy.get(locator).click(); //e o parametro message papa pegar a mensagem que precisa checar
  cy.on("window:alert", (msg) => {
    expect(msg).to.be.equal(message);
  });
});

Cypress.Commands.add("getToken", (user, passwd) => {
  cy.request({
    method: "POST",
    url: "https://barrigarest.wcaquino.me/signin",
    body: {
      email: "rafaeldenilson1@gmail.com",
      redirecionar: false,
      senha: "Denilson18",
    },
  })
    .its("body.token")
    .should("not.be.empty")
    .then((token) => {
      return token;
    });
});

cypress.commands.add("resetRest", () => {
  cy.getToken("rafaeldenilson1@gmail.com", "Denilson18").then((token) => {
    cy.request({
      method: "GET",
      headers: { Authorization: `JWT ${token}` },
      url: "https://barrigarest.wcaquino.me/reset",
    });
  });
});
