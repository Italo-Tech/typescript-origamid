// O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
function normalizar(texto: any) {
  return texto.trim("").toLowerCase();
}

console.log(normalizar(" DeSign"));
// console.log(normalizar(200));

// Usar o any pode quebrar a sua aplicação.
interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  });
}

const dados: any = "o any gera problemas";

mostrarCursos(dados);
