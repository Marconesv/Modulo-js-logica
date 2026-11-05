
const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

// Calculando a média inicial
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media < 5) {
    console.log("Reprovado");
} else {
    // Caso esteja entre 5 e 6.9 (Recuperação)
    let notaRecuperacao = Number(prompt("Digite a nota da recuperação:"));
    let mediaFinal = (media + notaRecuperacao) / 2;

    if (mediaFinal >= 5) {
        console.log("Aprovado na recuperação");
    } else {
        console.log("Reprovado");
    }
}