// Uma array é definida com o tipo de dado(s) que ela possui, seguida por []
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, "Taxas", 40, "Produto", 3, 30];

function maiorQue10(data: Array<number>) {
  return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros));

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "number");
}
console.log(filtrarValores(valores));

const dados: (string | number)[][] = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120],
];

// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: string[];
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Aulas: ${curso.idAulas.join(" | ")}</p>
      </div>
    `;
  });
}
