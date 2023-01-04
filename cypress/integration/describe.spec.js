/// <reference types="cypress" />   
// VSC irá reconhecer que estou usasndo o cypress 

it('Teste externo...', () => {      //com it.skip eu pulo o cenario de teste
})

//describe serve para agrupar um grupo de teste 
describe("deve agrupar testes...", () => {
    describe('deve agrupar testes mais específicos 2 ...', () => {
        it('Um teste específico 2 ...', () => {   //it.only eu executo apenas esse cenario

        })
    })

})









