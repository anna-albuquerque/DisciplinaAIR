import { squareWithFor, squareWithForEach } from './square';

describe('Square functions', () => {
    const inputArray = [3, 5, 7, 3, 8, 9, 1];
    const expectedOutput = [9, 25, 49, 9, 64, 81, 1];

    test('squareWithFor calculates square correctly', () => {
        const result = squareWithFor(inputArray);
        expect(result).toEqual(expectedOutput);
    });

    test('squareWithForEach calculates square correctly', () => {
        const result = squareWithForEach(inputArray);
        expect(result).toEqual(expectedOutput);
    });
});
