class Eletronico extends Produto {
    precoBase: number;
    taxa: number;

    constructor(nome: string, precoBase: number, taxa: number) {
        super(nome);
        this.precoBase = precoBase;
        this.taxa = taxa;
    }

    calcularPreco(): number {
        return this.precoBase * (1 + this.taxa);
    }
}

class Roupa extends Produto {
    precoBase: number;
    desconto: number;

    constructor(nome: string, precoBase: number, desconto: number) {
        super(nome);
        this.precoBase = precoBase;
        this.desconto = desconto;
    }

    calcularPreco(): number {
        return this.precoBase * (1 - this.desconto);
    }
}