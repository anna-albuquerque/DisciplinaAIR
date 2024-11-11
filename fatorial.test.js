// fatorial.test.js
const fatorial = require('./fatorial');

describe('Função de Fatorial', () => {
    test('Deve retornar 1 quando o número é 0', () => {
        expect(fatorial(0)).toBe(1);
    });

    test('Deve retornar 1 quando o número é 1', () => {
        expect(fatorial(1)).toBe(1);
    });

    test('Deve retornar o fatorial correto para um número positivo', () => {
        expect(fatorial(5)).toBe(120); 
    });

    test('Deve lançar uma exceção para números negativos', () => {
        expect(() => fatorial(-5)).toThrow("Erro: Não existe fatorial de número negativo");
    });
});
