// f HTMLElement()
console.log(document.constructor);

class Produto {
  tipo = "produto";
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const livro = new Produto("O Senhor dos Anéis");
