
const prompt = require("prompt-sync")();

let N = Number(prompt("N é quanto?:"));
let passos = 0;

while (N > 1) {
    if (N % 2 === 0) {
        N = N / 2;
    } else {
        N = N * 3 + 1;
    }
    passos++;
}

console.log("Passos: " + passos);