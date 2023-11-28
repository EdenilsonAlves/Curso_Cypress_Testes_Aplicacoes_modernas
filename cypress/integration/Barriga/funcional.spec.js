/// <reference types="cypress" />
describe('Teste funcional', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('rafaeldenilson1@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('Denilson18')
        cy.get('.btn').click()
        cy.get('.toast').should('be.visible').contains('Bem vindo, edenilson!')
    })
    it('Adicionando conta com sucesso', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('usuario teste').get('.btn').click()
        cy.get('.toast-success').should('be.visible').contains('Conta inserida com sucesso!')
    })

    it.only('Deve alterar uma conta', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.xpath("//table//td[contains(., 'usuario teste')]/..//i[@class='far fa-edit']").click()
        cy.get('[data-test=nome]')
            .clear()
            .type('conta alterada')
            .get('.btn')
            .click()
        cy.get('.toast-success').should('be.visible').contains('Conta atualizada com sucesso!')
    })
})
























