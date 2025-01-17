import { Produto } from './produto';

class Eletronico extends Produto {
    constructor(nome: string, precoBase: number, public taxa: number) {
      super(nome, precoBase);
    }
  
    calcularPreco(): number {
      return parseFloat((this.precoBase * (1 + this.taxa)).toFixed(2)); // Arredonda para 2 casas decimais
    }
  }
  
  class Roupa extends Produto {
    constructor(nome: string, precoBase: number, public taxa: number) {
      super(nome, precoBase);
    }
  
    calcularPreco(): number {
      return parseFloat((this.precoBase * (1 + this.taxa)).toFixed(2)); // Arredonda para 2 casas decimais
    }
  }
  
  export { Eletronico, Roupa };