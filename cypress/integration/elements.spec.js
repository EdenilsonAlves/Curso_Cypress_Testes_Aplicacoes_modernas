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
            .should('be.checked')                                        //be.checked eu verifico se está selecionado                 
        cy.get('formSexoFem').should('be.not.checked')                 //be.not.checked eu verifico que não está selecionado

        cy.get("[name='formSexo']").should('have.length', 2)           //validei se existe 2 radionButoon na tela
    })
    it('Checkbox', () => {
        cy.get('#formComidaFrango')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({ multiple: true })             //multiple:true eu clico em todos checkbox 
        cy.get('#formComidaFrango').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })
    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8)

        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function () {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
        })
    })
    it('Combo Mutiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])        //array com mais de um value, assim seleciono todos os que estão dentro do array

        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada'])
    })
})




































