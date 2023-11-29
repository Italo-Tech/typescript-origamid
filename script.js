"use strict";
// const video = document.querySelector(".player") as HTMLVideoElement;
// erro runtime, não existe volume de null
// video.volume;
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto();
    produto.nome;
}
async function handleProduto2() {
    const produto = (await fetchProduto());
    produto.nome;
}
async function handleProduto3() {
    const produto = await fetchProduto();
    produto.nome;
}
