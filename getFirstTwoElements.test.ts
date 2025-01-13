import { getFirstTwoElements } from './getFirstTwoElements';

describe('getFirstTwoElements', () => {
    test('Retorna os dois primeiros elementos do array', () => {
        const inputArray = [2, 4, 6, 2, 8, 9, 5];
        const expectedOutput = [2, 4];
        const result = getFirstTwoElements(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna array vazio quando entrada é vazia', () => {
        const inputArray: number[] = [];
        const expectedOutput: number[] = [];
        const result = getFirstTwoElements(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna o único elemento quando array possui um elemento', () => {
        const inputArray = [2];
        const expectedOutput = [2];
        const result = getFirstTwoElements(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna os dois primeiros elementos mesmo com mais de dois no array', () => {
        const inputArray = [9, 1, 3, 7];
        const expectedOutput = [9, 1];
        const result = getFirstTwoElements(inputArray);
        expect(result).toEqual(expectedOutput);
    });
});
