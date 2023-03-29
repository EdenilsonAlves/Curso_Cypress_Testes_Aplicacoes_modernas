/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => {                                                  // executa 1 vez antes de todos os testes 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {                                             // beforeEach executa antes de cada um dos testes 
        cy.reload();                                              //metodo usado para recarregar a pagina 
    })

    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('a').first().click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Edenilson');
        cy.get('#formNome').should('have.value', 'Edenilson')

        cy.get('[data-cy=dataSobrenome]')
            .type('Rafael123{backspace}{backspace}')        //{backspace} eu apago 1 palavra ou caractere cada vez que adiciono o backsapce
            .should('have.value', 'Rafael1')

        cy.get('#elementosForm\\:sugestoes')
            .type('Sou apaixonado por tecnologia')
            .should('have.value', 'Sou apaixonado por tecnologia')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('?????')

        cy.get('#elementosForm\\:sugestoes')
            .clear()                                                //comando para limpar o campo
            .type('False{selectall}True', { delay: 100 })
            .should('have.value', 'True')
    })

    it('RadioButton', () => { 
        cy.get('#formSexoMasc')
           .click()
           .should('be.checked')                            //be.checked eu verifico se está checked                   
        cy.get('formSexoFem').should('be.not.checked')      //be.not.checked eu verifico que não está checked

        cy.get("[name='formSexo']").should('have.length', 2)


    })












})
