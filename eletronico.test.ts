import { Produto } from "./produto";
import { Eletronico, Roupa } from './eletronico';

test('deve instanciar e alterar atributos de Eletronico e Roupa e testar metodo estático', () => {
  // Instanciar Eletronico
  const celular = new Eletronico("Smartphone", 1000, 0.15);
  Produto.mostrarPreco(celular); // O preço do produto Smartphone é R$1150.00
  expect(celular.calcularPreco()).toBe(1150);

  celular.precoBase = 1200; // Alterar preço base
  Produto.mostrarPreco(celular); // O preço do produto Smartphone é R$1380.00
  expect(celular.calcularPreco()).toBe(1380);

  // Instanciar Roupa
  const camiseta = new Roupa("Camiseta", 50, 0.1);
  Produto.mostrarPreco(camiseta); // O preço do produto Camiseta é R$55.00
  expect(camiseta.calcularPreco()).toBe(55);

  camiseta.precoBase = 70; // Alterar preço base
  Produto.mostrarPreco(camiseta); // O preço do produto Camiseta é R$77.00
  expect(camiseta.calcularPreco()).toBe(77);
});