import { Eletronico, Roupa } from './eletronico';

const celular = new Eletronico("Smartphone", 1000, 0.15);
const camiseta = new Roupa("Camiseta", 50, 0.1);

Produto.mostrarPreco(celular); // O preço do produto Smartphone é R$1150
celular.precoBase = 1200;
Produto.mostrarPreco(celular); // O preço do produto Smartphone é R$1380

Produto.mostrarPreco(camiseta); // O preço do produto Camiseta é R$45
camiseta.precoBase = 70;
Produto.mostrarPreco(camiseta); // O preço do produto Camiseta é R$63