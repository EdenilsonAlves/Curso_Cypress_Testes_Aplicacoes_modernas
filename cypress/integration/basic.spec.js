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
        let syncTitle

        cy.title().then(title => {
            console.log(title)
            cy.get('#formNome').type(title)
            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })

    it('should find and interract with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').
            click()
            .should('have.value', 'Obrigado!')     // realizando assertiva com o esperado após clicar 
    })
})


















