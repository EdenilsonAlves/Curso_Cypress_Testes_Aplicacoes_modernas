/// <reference types="cypress" />

describe('Dinamic tests', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach(food => {            //deixando os dados dinamicos para pegar parametros diferetes.
        it(`Cadastro com comida ${food}`, () => {    //aqui eu consigo passa apos o nome do teste o nome do parametro que clicou EX:cadastro com comida Carne
            cy.get("#formNome").type('Dede')
            cy.get("#formSobrenome").type('Alves')
            cy.get(`[name=formSexo][value=F]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get("#formEscolaridade").select('Doutorado')
            cy.get("#formEsportes").select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado').should('contain', 'Cadastrado!')
        })
    })

    it.only('Deve selecionar todos usando o each', () => {
        cy.get("#formNome").type('Dede')
        cy.get("#formSobrenome").type('Alves')
        cy.get(`[name=formSexo][value=F]`).click()
        cy.get('[name=formComidaFavorita]').each($el => {    // condicional para não clicar quando o elemento tiver valor de vegeratiano
            if ($el.val() !== 'vegetariano')
            cy.wrap($el).click()
        })
        cy.get("#formEscolaridade").select('Doutorado')
        cy.get("#formEsportes").select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado').should('contain', 'Cadastrado!')
    })
})



















