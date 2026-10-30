// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];


const heroi = {
    nome: "Nero",
    vida: 10,
    dano: 3,
    veneno: 0,
    inventario: [],
    sorte: 0,
    xp: 0,
    mp: 0,
    critico: 0.2,
    danoCritico: 2
}

// Teste de alteração da propriedade, ao mudar a propriedade da CONSTANTE "heroi"
// eu consigo sem problemas, pois estou mudando uma propriedade da constante,
// e não a constante em sí. 
//  console.log("Antes de mudar: ", heroi.vida)

//  heroi.nome = "João"

//  console.log("Depois de mudar: ", heroi.nome)