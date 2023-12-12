"use strict";
class Produto {
    // public: é o padrão de qualquer uma
    // private: só pode ser acessada dentro da classe
    tipo = "produto";
    // protected: só pode ser acessada dentro da classe e subclasses
    preco;
    // readonly: só permite leitura
    nome;
    constructor(nome, preco) {
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getTipo() {
        return this.tipo;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    // [javascript] static: não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro = new Produto("O Senhor dos Aneis", 200);
console.log(livro.getTipo());
console.log(livro.getPreco());
console.log(livro.nome);
console.log(Produto.transformarPreco(100));
