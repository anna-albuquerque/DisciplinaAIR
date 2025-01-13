import { sortArray } from './sortArray';

describe('sortArray', () => {
    test('Ordena os elementos em ordem alfabética', () => {
        const inputArray = ['carro', 'boneco', 'ave', 'lapís'];
        const expectedOutput = ['ave', 'boneco', 'carro', 'lapís'];
        const result = sortArray(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna array vazio para entrada vazia', () => {
        const inputArray: string[] = [];
        const expectedOutput: string[] = [];
        const result = sortArray(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Ordena corretamente um array com um único elemento', () => {
        const inputArray = ['lapís'];
        const expectedOutput = ['lapís'];
        const result = sortArray(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Ordena corretamente array com letras maiúsculas e minúsculas', () => {
        const inputArray = ['carro', 'Boneco', 'Ave', 'lapís'];
        const expectedOutput = ['Ave', 'Boneco', 'carro', 'lapís'];
        const result = sortArray(inputArray);
        expect(result).toEqual(expectedOutput);
    });
});
