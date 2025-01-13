import { getEvenNumbers } from './getEvenNumbers';

describe('getEvenNumbers', () => {
    test('Retorna apenas os números pares do array', () => {
        const inputArray = [8, 3, 9, 5, 6, 12];
        const expectedOutput = [8, 6, 12];
        const result = getEvenNumbers(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna array vazio quando não há números pares', () => {
        const inputArray = [3, 5, 7, 9];
        const expectedOutput: number[] = [];
        const result = getEvenNumbers(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna corretamente quando todos os números são pares', () => {
        const inputArray = [2, 4, 6, 8];
        const expectedOutput = [2, 4, 6, 8];
        const result = getEvenNumbers(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('Retorna array vazio para array vazio', () => {
        const inputArray: number[] = [];
        const expectedOutput: number[] = [];
        const result = getEvenNumbers(inputArray);
        expect(result).toEqual(expectedOutput);
    });
});
