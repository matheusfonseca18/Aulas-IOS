// let pessoa = {
//     nome: "Matheus",
//     sobrenome: "Fonseca",
//     idade: 23,
//     endereco: {
//         rua: "Av. Paulista",
//         numero: 365,
//     },
//     escolaridade: "Superior",
// };

// console.log (pessoa.nome)

// console.log (`Olá ${pessoa.nome}, você tem ${pessoa.idade} anos e mora na ${pessoa.endereco.rua}`)

// const {
//     nome,
//     sobrenome,
//     idade,
//     escolaridade,
//     endereco: {rua},
//     } = pessoa;

// console.log (`Olá ${nome}, você tem ${idade} anos e mora na ${rua}`)

let tarefas = [
    {
        id: "atividade1",
        desc: "café com cliente",
        concluido: true,
        },

    {
        id: "atividade2",
        desc: "reunião",
        concluido: false,
        },
    
    {
        id: "atividade2",
        desc: "medico",
        concluido: false,
        },
]

console.log(tarefas[1].desc)
console.log(tarefas[1].concluido)
console.log(`Eu já tomei ${tarefas[0].desc}? ${tarefas[0].concluido}`)

console.log()

console.log(typeof tarefas)
console.log(tarefas)

console.log()

let text = JSON.stringify(tarefas) //transforma obejto em string

console.log(typeof text)
console.log(text)

console.log()

let text2 = JSON.parse(text) //transforma string em objeto

console.log(typeof text2)
console.log(text2)

