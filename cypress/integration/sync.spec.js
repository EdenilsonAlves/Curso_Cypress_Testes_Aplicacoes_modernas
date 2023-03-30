/// <reference types="cypress" />

describe('Esperas...', () => {
    before(() => {                                                  // executa 1 vez antes de todos os testes 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {                                             // beforeEach executa antes de cada um dos testes 
        cy.reload();                                              //metodo usado para recarregar a pagina 
    })
    it('Deve aguardar elemento está disponivel', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').type('funciona')
        
        
    })






















})