"use strict";
// f HTMLElement()
console.log(document.constructor);
class Produto {
    tipo = "produto";
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto("O Senhor dos Anéis");
