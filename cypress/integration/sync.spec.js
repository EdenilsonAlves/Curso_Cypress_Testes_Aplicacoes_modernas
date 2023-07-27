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
    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it('Uso so find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', () => {
        /* cy.get('#buttonDelay').click()
           cy.get('#NovoCampo', { timeout: 1000 }).should('exist')    timeout vai esperar  ate 30 segundo para executar, caso execute antes ele segue 
   
           cy.get('#buttonListDOM').click()
           cy.wait(5000)                                               wait vai esperar o tempo informado independente se ser executado antes 
           cy.get('#lista li span', { timeout: 3000 })
               .should('contain', 'Item 2')*/

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)

    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})



































