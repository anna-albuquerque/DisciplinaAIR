// Função para ordenar elementos de um array
function sortArray(array: string[]): string[] {
    return array.sort((a, b) => a.localeCompare(b));
}

// Exportando a função para facilitar os testes
export { sortArray };
