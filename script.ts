// A palavra-chave type cria um atalho (alias) para um tipo customizado.
type NumberOrString = number | string;

let total: NumberOrString = 10;
total = "200";

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
  </div>
  `;
}

preencherDados({
  nome: "Computador",
  preco: 2000,
  teclado: false,
});

preencherDados({
  nome: "Notebook",
  preco: 2500,
  teclado: true,
});

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
  if (categoria === "design") {
    console.log("Pintar vermelho");
  } else if (categoria === "codigo") {
    console.log("Pintar verde");
  } else if (categoria === "descod") {
    console.log("Pintar roxo");
  }
}

pintarCategoria("codigo");

// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  garantia: string;
  preco: number;
  segueroAcidente: boolean;
  descricao: string;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>

      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
