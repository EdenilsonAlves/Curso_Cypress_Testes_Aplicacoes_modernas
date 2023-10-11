/// <reference types="cypress" />

describe('Work with alert', () => {
    before(() => {                                                  // executa 1 vez antes de todos os testes 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {                                             // beforeEach executa antes de cada um dos testes 
        cy.reload();                                              //metodo usado para recarregar a pagina 
    })

    it('Alert', () => {
        //cy.get('#alert').click()
       //cy.on('window:alert', msg => {       //cy.on pega eventos que ocorre na tela 
        //    expect(msg).to.be.equal('Alert Simples')
       // })
       cy.clickAlert('#alert', 'Alert Simples')          //estou validando a mesma alert, mas chamando o comando personalizado criado em support/commands.js
    })

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it('Confirm', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:Confirmado', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })
    it('Deny', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:Confirmado', msg => {
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })
    it('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('25')
        })
        cy.on('window:prompt', msg => {
            expect(msg).to.be.equal('Era 25')
        })
        cy.on('window:Confirmado', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#confirm').click()
    })
    it('Validando mensagens', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Edenilson')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Rafael')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))
    })
})


















