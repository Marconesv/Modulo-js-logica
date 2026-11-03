const prompt = require("prompt-sync")();

let distancia = Number(prompt("Qual a distancia em cm ate a cesta?"));

if (distancia <= 800) {
    console.log("1 ponto")
} else if ( 800 < distancia && distancia <= 1400) { // de o "&&" não funciona, 
    console.log("2 pontos")                         // pois sem ele o console.log(3 pontos)
} else {                                            // não funciona
    console.log("3 pontos")
}  