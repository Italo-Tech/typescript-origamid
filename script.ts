// Exemplo 1
function retorno<Tipo>(a: Tipo): Tipo {
  return a;
}

retorno("A Game").charAt(0);
// retorno<string>(a: string): string

retorno(200).toFixed();
// retorno<number>(a: number): number

// Exemplo 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Melancia", "Banana", "Pêra", "Maça", "Abacate", "Uva"];

// Sem generic
// function firstFive(data: string[] | number[]) {
//   return data.slice(0, 5);
// }
// Com generic
function firstFive<T>(data: T[]): T[] {
  return data.slice(0, 5);
}

console.log(firstFive(numeros));
console.log(firstFive(frutas));

// Exemplo 3
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg;
  else return null;
}

console.log(notNull(200)?.toFixed());
console.log(notNull("André")?.toLowerCase());

// Exemplo 4
function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);
