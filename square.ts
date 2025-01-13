// Função para calcular o quadrado usando for
function squareWithFor(array: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** 2);
    }
    return result;
}

// Função para calcular o quadrado usando forEach
function squareWithForEach(array: number[]): number[] {
    const result: number[] = [];
    array.forEach(num => result.push(num ** 2));
    return result;
}

// Exportando as funções para facilitar o teste
export { squareWithFor, squareWithForEach };
