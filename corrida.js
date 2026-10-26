
const prompt = require("prompt-sync")();

const tarifaBase = 5;
const precoPorKm = 2;
const valorPorMinuto = 0.5;

let km = Number(prompt("Quantos Km a corrida tem?"));
let minutos = Number(prompt("Quantos Minutos a corrida tem?"))

let valorDaCorrida = tarifaBase + precoPorKm * km + minutos * valorPorMinuto

console.log("R$: " + valorDaCorrida.toFixed(2))
