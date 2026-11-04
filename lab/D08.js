
const prompt = require("prompt-sync")();

let deposito = Number(prompt("Qual o valor do deposito?"));
let meta = Number(prompt("Qual a meta de saldo?"));

let meses = 0;
let saldo = 0;
let juros = 0.5;

while (saldo < meta) {
    saldo += deposito;
    saldo += saldo * juros;
    meses++;
}
console.log("O saldo atingiu a meta em " + meses + " meses.");
console.log("O saldo final é: R$ " + saldo.toFixed(2));
