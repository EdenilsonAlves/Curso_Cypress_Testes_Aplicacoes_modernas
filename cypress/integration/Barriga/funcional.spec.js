/// <reference types="cypress" />

import loc from '../../support/locators'
describe('Teste funcional', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.login.user).type('rafaeldenilson1@gmail.com')
        cy.get(loc.login.password).type('Denilson18')
        cy.get(loc.login.btn_entrar).click()
        cy.get(loc.message.alert_message).should('be.visible').contains('Bem vindo, edenilson!')
    })
    it('Adicionando conta com sucesso', () => {
        cy.get(loc.menu.settings).click()
        cy.get(loc.menu.contas).click()
        cy.get(loc.contas.nome).type('usuario teste').get('.btn').click()
        cy.get(loc.message.alert_message).should('be.visible').contains('Conta inserida com sucesso!')
    })

    it('Não deve permitir adicionar conta existente', () => {
        cy.get(loc.menu.settings).click()
        cy.get(loc.menu.contas).click()
        cy.get(loc.contas.nome).type('usuario teste').get('.btn').click()
        cy.get(loc.message.alert_message).should('be.visible').contains('Erro')
    })

    it('Deve alterar uma conta', () => {
        cy.get(loc.menu.settings).click()
        cy.get(loc.menu.contas).click()
        cy.xpath(loc.contas.xp_btn_alterar).click()
        cy.get(loc.contas.nome)
            .clear()
            .type('conta alterada')
            .get(loc.contas.btn_salvar)
            .click({ force: true })
        cy.get(loc.message.alert_message).should('be.visible').contains('Conta atualizada com sucesso!')
    })

    it('Realizando uma movimentação de conta de despesa', () => {
        cy.get('[data-test="menu-movimentacao"]').click()
        cy.get('[data-test="tipo-despesa"]').click()
        cy.get('[data-test="data-transacao"]').click()


    })


})
























