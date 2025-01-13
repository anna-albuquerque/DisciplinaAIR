// Função para filtrar os elementos pares de um array
function getEvenNumbers(array: number[]): number[] {
    return array.filter(num => num % 2 === 0);
}

// Exportando a função para facilitar os testes
export { getEvenNumbers };
