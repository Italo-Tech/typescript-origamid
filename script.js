"use strict";
class Produto {
    nome;
    preco;
    autor;
    constructor(nome, preco, autor) {
        this.nome = nome;
        this.preco = preco;
        this.autor = autor;
    }
}
// const livro = new Produto("Game of Thrones", 200);
// console.log(livro instanceof Produto);
class Livro extends Produto {
    nome;
    preco;
    constructor(nome, preco, autor) {
        super(nome, preco, autor);
        this.nome = nome;
        this.preco = preco;
    }
}
const livro = new Livro("A vida de Pi", 150, "David Rokkins");
console.log(livro);
class Jogo extends Produto {
    nome;
    constructor(nome, preco, autor) {
        super(nome, preco, autor);
        this.nome = nome;
        this.autor = autor;
    }
}
const jogo = new Jogo("League of Legends", 200, "Ítalo");
console.log(jogo);
function buscarProduto(busca) {
    if (busca === "O  hobbit") {
        return new Livro("J. R. R. Tolkien", 50, "Steve Jobs");
    }
    if (busca === "Dota") {
        return new Jogo("Dota", 400, "RPG");
    }
    else {
        return null;
    }
}
const produto = buscarProduto("Dota");
if (produto instanceof Livro) {
    console.log(produto.nome);
}
if (produto instanceof Jogo) {
    console.log(produto.nome);
}
if (produto instanceof Produto) {
    console.log(produto.nome);
}
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
// <a id="origamid" href="http://www.origamid.com">Origamid</a>
const link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http://", "https://");
}
console.dir(link);
