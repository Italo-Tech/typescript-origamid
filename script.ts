// Uma array não pode ser verificada com o typeof pois a mesma é um object. Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().

import { forEach } from "lodash";

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log("É instância de Array");
  }
  if (Array.isArray(data)) {
    console.log("É array");
  }
}

// Type Predicate
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function handleData(data: unknown) {
  if (isString(data)) {
    data.toUpperCase();
  }
}

handleData("Origamid");
handleData(200);

// Objetos
// O Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}
fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "preco" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data);
  }
}

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchMyCurse() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleMyCurse(json);
}
fetchMyCurse();

interface Curse {
  nome: string;
  aulas: number;
  gratuito: boolean;
  idAulas: number;
  horas: number;
  nivel: "inciante" | "avancado";
  tags: string[];
}

// Minha Type Guard com Type Predicate
function isCurse(value: unknown): value is Curse {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleMyCurse(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurse).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(", ")}</p>
        </div>
      `;
    });
  }
}
