abstract class Produto {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    abstract calcularPreco(): number;

    static mostrarPreco(produto: Produto): void {
        console.log(`O preço do produto ${produto.nome} é R$${produto.calcularPreco()}`);
    }
}