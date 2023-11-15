// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
// somar(3, 4);
// somar(3, 4, 1);

// const subtrair = (a: number, b: number): number => a - b;

// subtrair(10, 2);

// type Callback = (event: MouseEvent) => void;

// void
// function pintarTela(cor: string) {
//   document.body.style.background = cor;
// }

// pintarTela('black');

// // Erro, void não pode ser verificado
// if (pintarTela('black')) {
// }

// const btn = document.querySelector('button');

// // Erro, void não pode ser verificado
// if (btn && btn.click()) {
// }

// // Se a função tiver qualquer tipo de retorno,
// // ela não terá mais o void como uma opção e sim o undefined
// function isString(value: any) {
//   if (typeof value === 'string') {
//     return true;
//   }
// }

// if (isString('teste')) {
//   console.log('É string');
// }

// never
// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }

// abortar("Um erro ocorreu");
// console.log("Tente novamente");

// método
// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number;
// }

// function calcular(forma: Quadrado) {}

// Overload - O Overload deve ser compatível com a função original.
// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === "string") {
//     return valor.trim().toLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLowerCase());
//   }
// }
// console.log(normalizar(" Produto "));
// console.log(normalizar(["Banana ", " UVA"]));

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
  if (typeof valor === "number") {
    return Math.ceil(valor);
  } else {
    return Math.ceil(Number(valor)).toString();
  }
}

console.log(arredondar(200.45));
console.log(arredondar("300.45"));
