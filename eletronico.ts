import { Produto } from './produto';

class Eletronico extends Produto {
  constructor(nome: string, precoBase: number, public taxa: number) {
    super(nome, precoBase); // Passa os dois argumentos para o construtor da classe base
  }

  calcularPreco(): number {
    return this.precoBase * (1 + this.taxa); // Aplica a taxa
  }
}

class Roupa extends Produto {
  constructor(nome: string, precoBase: number, public taxa: number) {
    super(nome, precoBase); // Passa os dois argumentos para o construtor da classe base
  }

  calcularPreco(): number {
    return this.precoBase * (1 + this.taxa); // Aplica a taxa
  }
}

export { Eletronico, Roupa };
