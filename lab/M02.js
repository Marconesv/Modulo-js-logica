
const prompt = require("prompt-sync")();

let pessoas = Number(prompt("Quantas pessoas vão na excurssão?"));
let capacidade = Number(prompt("Qual a capacidade de cada ônibus?"));
let onibus = Math.ceil(pessoas / capacidade); //A função Math.ceil() arredonda o numero para cima. 

console.log(onibus + " onibus são necessários");

