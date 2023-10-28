let produto = "Livro";
let preco = 200;

const carro = {
  marca: "BMW",
  portas: 4,
};

const barato = preco < 200 ? true : "produto caro";

// As anotações serão necessárias quando lidamos com funções.
function somar(a: number, b: number) {
  return a + b;
}

somar(5, 10);
// somar("10", "10");

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);

//Exercício 1 - Conserte a função com TypeScript
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

//Exercício 2 - Conserte as funções com TypeScript
const input = document.querySelector("input");

const total = localStorage.getItem("total");
if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}
