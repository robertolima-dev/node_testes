describe("Suite de testes de divisao", () => {

    var Calculadora = require("../../src/js/calculadora");

    it("Deve retornar 2 para 6 e 3", () => {
        expect(Calculadora.dividir(6, 3)).toEqual(2);
    });

    it("Deve retornar 2 para 6 e 3 no formato texto", () => {
        expect(Calculadora.dividir('6', '3')).toEqual(2);
    });

    it("Deve retornar 1.5 para 4.5 e 3", () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it("Deve retornar 'ERRO' para divisao por 0", () => {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro');
    });

    it("Deve retornar 0 para valor 1 invalido", () => {
        expect(Calculadora.dividir(undefined, 3)).toEqual(0)
    })

    it("Deve retornar 0 para valor 2 invalido", () => {
        expect(Calculadora.dividir(5, undefined)).toEqual(0)
    })

});