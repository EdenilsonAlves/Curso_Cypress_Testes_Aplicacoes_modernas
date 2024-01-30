/// <reference types="cypress" />

describe("Teste funcional", () => {
  let token;
  before(() => {
    cy.getToken("rafaeldenilson1@gmail.com", "Denilson18").then((tkn) => {
      token = tkn;
    });
  });

  beforeEach(() => {
    cy.resetRest(); //Função para resetar os dados do usuario antes de cada teste.
  });

  it("Adicionando conta com sucesso", () => {
    cy.request({
      url: "https://barrigarest.wcaquino.me/contas",
      method: "POST",
      headers: { Authorization: `JWT ${token}` },
      body: {
        nome: "conta tester api",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.be.property("id");
      expect(res.body).to.have.property("nome", "conta tester api");
    });
  });

  it("inserindo conta com sucesso", () => {});

  it("Deve alterar uma conta", () => {});

  it("Realizando uma movimentação de conta de despesa", () => {});
});
