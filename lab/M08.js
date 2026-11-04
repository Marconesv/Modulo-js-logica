const prompt = require("prompt-sync")();

const temperaturas = [];
for (let i = 0; i < 7; i++) {
    let temperatura = Number(prompt("Digite a temperatura do dia " + (i + 1) + ": "));
    temperaturas.push(temperatura);
}
let soma = 0;

for (let i = 0; i < temperaturas.length; i++) {
    console.log("Temperatura do dia " + (i + 1) + ": " + temperaturas[i] + "°C");
} 
for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i];
}
let media = soma / temperaturas.length;

console.log("A média das temperaturas é: " + media.toFixed(2) + "°C");

let maior = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
}
console.log("A maior temperatura é: " + maior + "°C");

let diaMaiorQueMedia = 0;
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > media) {
        diaMaiorQueMedia++;
    }
}
console.log("Os dias acima da média: " + diaMaiorQueMedia);