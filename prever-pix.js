
const prompt = require("prompt-sync")();

let saldo = Number(prompt("Quanto tem no saldo?"));
let valor = Number(prompt("Qual valor?"))
let hora = Number(prompt("Que horas são?"))

if (hora >= 20 && valor > 1000) {
    console.log("Pix Bloqueado")
} 

if (saldo >= valor) {
    saldo = saldo - valor;
console.log("Pix enviado. Saldo: R$", saldo.toFixed(2))
} else {
    console.log("Saldo insuficiente")
}