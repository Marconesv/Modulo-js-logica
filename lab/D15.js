
const prompt = require("prompt-sync")();

let a = Number(prompt("Qual o valor de a?: "));
let b = Number(prompt("Qual o valor de b?: "));


function mdc (a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
    return a;
}

function mmc (a, b) {
  return (a * b) / mdc(a, b);
}

let resultadoMDC = mdc(a, b);
let resultadoMMC = mmc(a, b);
console.log( "MDC: " + resultadoMDC);
console.log( "MMC: " + resultadoMMC);