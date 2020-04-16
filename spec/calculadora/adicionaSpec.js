describe("Suite de testes de adição", () => {

    var Calculadora = require('../../src/js/calculadora')

    it("Deve retornar 5 para 2 e 3", () => {
        expect(Calculadora.adicionar(2, 3)).toEqual(5)
    })

    it("Deve retornar 6 para 9 e -3 no formato texto", () => {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6)
    })

    it("Deve retornar 4.5 para 1.5 e 3", () => {
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5)
    })

    it("Deve retornar 0 para valor 1 não numérico", () => {
        expect(Calculadora.adicionar(undefined, 3)).toEqual(0)
    })

    it("Deve retornar 0 para valor 2 não numérico", () => {
        expect(Calculadora.adicionar(5, undefined)).toEqual(0)
    })
})