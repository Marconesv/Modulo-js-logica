

// let Lucas = 5.5
// let Micael = 8
// let William = 6.5
// let Leonardo = 6
// let Luiza = 9.5
// let Aila = 9

// let media = 6

// if (Lucas >= media) {
//     console.log("Lucas foi aprovado")
// } else {
//     console.log("Lucas esta em recuperação")
// }

// if (Micael >= media) {
//     console.log("Micael foi aprovado")
// } else {
//     console.log("Micael esta em recuperação")
// }

// if (William >= media) {
//     console.log("William foi aprovado")
// } else {
//     console.log("William esta em recuperação")
// }

// if (Leonardo >= media) {
//     console.log("Leonardo foi aprovado")
// } else {
//     console.log("Leonardo esta em recuperação")
// }

// if (Luiza >= media) {
//     console.log("Luiza foi aprovado")
// } else {
//     console.log("Luiza esta em recuperação")
// }

// if (Aila >= media) {
//     console.log("Aila foi aprovado")
// } else {
//     console.log("Aila esta em recuperação")
// }
// //tive que mudar 7 linhas


const nomes = ["Lucas", "Micael", "William", "Leonardo", "Luiza", "Aila"]
const medias = [5.5, 8, 6.5, 6, 9.5, 9]

const mediaDaEscola = 7

for (let i = 0; i < medias.length; i++) {
     // i = 0
    
    if (medias[i] >= mediaDaEscola) {
        console.log("O aluno: " + nomes[i] + " Está Aprovado")
    } else {
        console.log("O aluno: " + nomes[i] + " Está Reprovado")
    }
}
