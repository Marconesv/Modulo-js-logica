const prompt = require("prompt-sync")();

let diametroDaBola = Number(prompt("Qual o diametro da bola?"));
let alturaDaCaixa = Number(prompt("Qual a altura da caixa?"));
let larguraDaCaixa = Number(prompt("Qual a largura da caixa?"));
let profundidadeDaCaixa = Number(prompt("Qual a profundidade da caixa?"));

if (diametroDaBola <= alturaDaCaixa && diametroDaBola <= larguraDaCaixa && diametroDaBola <= profundidadeDaCaixa) {
    console.log("Cabe")
} else {
    console.log("Cabe não")
}