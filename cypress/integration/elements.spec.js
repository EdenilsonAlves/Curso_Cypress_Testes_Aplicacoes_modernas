/// <reference types="cypress" />

describe('Work with basic elements', () => {
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it.only('Links', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('a').first().click()
        cy.get('#resultado').should('have.text', 'Voltou!') 
        cy.reload()                                                     //comando para recarregar a pagina
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })


        






})
