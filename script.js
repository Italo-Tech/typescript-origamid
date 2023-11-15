"use strict";
// Exemplo 1
// function extractText<Tipo extends HTMLElement>(el: Tipo): string {
//   return el.innerText;
// }
// const link = document.querySelector('a');
// if (link) {
//   console.log(extractText(link));
//   // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
// }
// Exemplo 2
// function $<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>('a')?.href;
// Define que o retorno será um HTMLAnchorElement
const link = document.querySelector(".link");
link?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook.nome);
}
