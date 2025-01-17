abstract class Produto {
    constructor(public nome: string, public precoBase: number) {}
  
    // Método abstrato para cálculo de preço
    abstract calcularPreco(): number;
  
    // Método estático que utiliza o método abstrato
    static mostrarPreco(produto: Produto): void {
      console.log(`O preço do produto ${produto.nome} é R$${produto.calcularPreco().toFixed(2)}`);
    }
  }
  
  export { Produto };  