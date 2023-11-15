"use strict";
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
// somar(3, 4);
// somar(3, 4, 1);
function arredondar(valor) {
    if (typeof valor === "number") {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(200.45));
console.log(arredondar("300.45"));
