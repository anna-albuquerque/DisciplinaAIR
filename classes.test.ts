import { Livro, Filme } from './classes';

test('teste para instanciar e alterar atributos de Livro e Filme', () => {
  const livro = new Livro("Dom Casmurro", "Machado de Assis");
  expect(livro.descricao()).toBe("Dom Casmurro, escrito por Machado de Assis.");

  livro.titulo = "Memórias Póstumas de Brás Cubas";
  expect(livro.descricao()).toBe("Memórias Póstumas de Brás Cubas, escrito por Machado de Assis.");

  const filme = new Filme("Central do Brasil", "Walter Salles");
  expect(filme.descricao()).toBe("Central do Brasil, dirigido por Walter Salles.");

  filme.titulo = "Cidade de Deus";
  expect(filme.descricao()).toBe("Cidade de Deus, dirigido por Walter Salles.");
});