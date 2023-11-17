// Type guard -> eu garanto através de uma verificação se a propriedade existe ou não.

// function typeGuard(value: any) {
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }

// typeGuard("Origamid");
// typeGuard(200);
// typeGuard(document.body);

const obj = {
  nome: "Origamid",
};

if ("nome" in obj) {
  console.log("Sim");
}

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

// O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj.
function handleProduto(data: Produto) {
  if ("preco" in data) {
    document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
  }
}

fetchProduto();
