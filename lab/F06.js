
const prompt = require("prompt-sync")();

let dado1 = Number(prompt("Que numero caiu?"));
let dado2 = Number(prompt("Que numero caiu?"));
let dado3 = Number(prompt("Que numero caiu?"));

if (dado1 > dado2 && dado1 > dado3) {
    console.log(dado1);
} else if (dado2 > dado1 && dado2 > dado3) {
    console.log(dado2);
} else {
    console.log(dado3);
}