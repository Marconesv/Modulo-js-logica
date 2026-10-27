/*
     esse sinal || é o operador lógico OU, que em uma
     condição, se qualquer um dos lados for verdadeiro,
     o resultado é verdadeiro.
     

     esse sinal && é o operador lógico E, que em uma 
     condição, obriga que os dois lados sejam verdadeiros ou falsos
     para dar verdadeiro.
*/

let hora = 23;
let saldo = 500;
let valor = 200;

console.log("A resposta é: ", hora >= 20) // true
console.log("A resposta é: ", hora < 6) // false
console.log("A resposta é: ", hora >= 20 || hora < 6) //true
console.log("A resposta é: ", hora >= 20 && hora < 6) //false
console.log("A resposta é: ", valor > 0 && valor <= saldo) //true

// if (hora >= 20 && hora < 6) {
//     console.log("Aqui!") //Caminho VERDADEIRO
// } else {
//     console.log("Ou, aqui?") //Caminho FALSO
// }