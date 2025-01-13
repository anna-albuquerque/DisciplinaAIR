import { joinStrings } from './joinStrings';

describe('joinStrings', () => {
    test('Concatena as strings com espaço', () => {
        const inputArray = ['Arrays', 'com', 'TypeScript'];
        const expectedOutput = 'Arrays com TypeScript';
        const result = joinStrings(inputArray);
        expect(result).toBe(expectedOutput);
    });

    test('Retorna string vazia para array vazio', () => {
        const inputArray: string[] = [];
        const expectedOutput = '';
        const result = joinStrings(inputArray);
        expect(result).toBe(expectedOutput);
    });

    test('Concatena corretamente array com um único elemento', () => {
        const inputArray = ['TypeScript'];
        const expectedOutput = 'TypeScript';
        const result = joinStrings(inputArray);
        expect(result).toBe(expectedOutput);
    });
});
