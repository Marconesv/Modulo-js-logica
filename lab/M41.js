const prompt = require("prompt-sync")();


let numeroSecreto = Number(prompt("Qual o número secreto?:"));

let numeroPalpite = Number(prompt("Fale seu palpite:"));

while (numeroPalpite !== numeroSecreto) {
    if (numeroPalpite > numeroSecreto) {
        console.log("Tente um número menor");
    } else {
        console.log("Tente um número maior");
    }
    numeroPalpite = Number(prompt("Digite o seu palpite:"));
}

console.log("Acertou");