/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;                             //trabalhando com assertivas

    expect(a).equal(1);                      // espero que a seja igual a 1
    expect(a, 'deveria ser 1').equal(1);    //consigo fazer uma assertivar com uma mensagem 
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')      //assertiva que "a" nao é igual a "b"  
})

it('truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2 })            // com deep eu consigo olhor para dentro do parametro e pegar os valores
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).to.have.property('b', 2)                   // com Property eu verifico se tem a propriedade 'B' e o 2 
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})


it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])               //deve haver membros 1,2,3
    expect(arr).to.include.members([1, 3])               // deve haver membros incluso 1, 3
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})


it('Types', () => {
    const num = 1
    const str = 'string'

    expect(num).to.be.a('number')                  //quero que ela seja um numero
    expect(str).to.be.a('string')                   //quero que ela seja um texto
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {

    const str = 'String de teste'
   
    expect(str).to.be.equal('String de teste')        //espero que a string seja equal a "String de teste"
    expect(str).to.have.length(15)                    //pedindo para verificar se a string contem 15 caracteres
    expect(str).to.contains('de')                     //pedindo para verificar se contem o valor "de"
    expect(str).to.match(/^String/)                   //estou pedindo para verificar o começo do texto que no caso é 'String'
    expect(str).to.match(/teste$/)                    //estou pedindo para verificar o final do texto que no caso é 'teste'
    expect(str).to.match(/.{15}/)                     //estou pedindo para verificar que deve conter 15 caracteres a string
    expect(str).to.match(/\w+/)                       //pedindo para verificar que só existe letras 1 ou mais
    expect(str).to.match(/\D+/)                       //pedidndo para verificar que não exista numeros 
})

it('Numbers', () => {
    const number = 4 
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)                              //validando que number seja igual a 4
    expect(number).to.be.above(4)                             // validando que number(4) é maior que 3
    expect(number).to.be.bellow(7)                           //validando que number(4) é menor que 7
    expect(floatNumber).to.be.equal(5.2123)                  // validando que floatNumber(numero flutuante) seja igual a 5.2123
    expect(floatNumber).to.be.closeTo(5.2, 0.1)              // validando que o FloatNumber(numero flutuante) seje proximo a 5.2 com precissao de 0.1
    expect(floatNumber).to.be.above(5)                       //verificando que o floatNumber seja maior que 5 casas
    
});
    
    






































