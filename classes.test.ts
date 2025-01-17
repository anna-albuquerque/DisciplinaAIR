import { Livro, Filme } from './classes';

const livro = new Livro("Dom Casmurro", "Machado de Assis");
const filme = new Filme("Central do Brasil", "Walter Salles");

console.log(livro.descricao()); // Dom Casmurro, escrito por Machado de Assis.
livro.titulo = "Memórias Póstumas de Brás Cubas";
console.log(livro.descricao()); // Memórias Póstumas de Brás Cubas, escrito por Machado de Assis.

console.log(filme.descricao()); // Central do Brasil, dirigido por Walter Salles.
filme.titulo = "Cidade de Deus";
console.log(filme.descricao()); // Cidade de Deus, dirigido por Walter Salles.