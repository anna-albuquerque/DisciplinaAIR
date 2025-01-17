class Livro implements Descritivo {
    titulo: string;
    autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    descricao(): string {
        return `${this.titulo}, escrito por ${this.autor}.`;
    }
}

class Filme implements Descritivo {
    titulo: string;
    diretor: string;

    constructor(titulo: string, diretor: string) {
        this.titulo = titulo;
        this.diretor = diretor;
    }

    descricao(): string {
        return `${this.titulo}, dirigido por ${this.diretor}.`;
    }
}

export { Filme, Livro };