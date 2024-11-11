function fatorial(n) {
    if (n < 0) {
        return "Fatorial não é definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Exemplo de uso:
const numero = 5;
console.log(`O fatorial de ${numero} é: ${fatorial(numero)}`);
