/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')   //Realizando assertiva de texto da PG 
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //TODO imprimir o log no console 
        //TODO escrever o log em um campo de texto

    })
})






