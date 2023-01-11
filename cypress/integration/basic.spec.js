/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')   //Realizando assertiva de texto da PG 
        cy.title().should('contain', 'Campo')
        //cy.pause()                                               //comando para pausa o teste nesta linha 

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //TODO imprimir o log no console 
        //TODO escrever o log em um campo de texto
    })
    it('should find and interract with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').
            click()
            .should('have.value', 'Obrigado!')     // realizando assertiva com o esperado após clicar 
    })
})











