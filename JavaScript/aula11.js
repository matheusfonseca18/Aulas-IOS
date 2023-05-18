// let alunos = ["Vitor" , "Samuel" , "Bruno" , "Hilary" , "Day"];

// alunos.forEach((nome) => {
//     console.log(`alunos aprovados ${nome}`);
// })
 
let alunos = ["vitor" , "samuel" , "bruno" , "hilary" , "day" ,"matheus"];

alunos.forEach((nome) => {
    console.log(`Aluno ${nome} está na sala`);
})

console.log()

let email = ["vitor@gmail.com" , "samuel@gmail.com" , "bruno@gmail.com" , "hilary@gmail.com" , "day@gmail.com" ,"matheus@gmail.com"];

const msg = (valorEmail) => {
    console.log (`Email enviado para ${valorEmail}`);
};

email.forEach ((item) => {
    msg(item);
})

console.log()

const valores = [
    {
        produto: "tv",
        valor: 2000,
    },
    {
        produto: "cel",
        valor: 1000,
    },
    {
        produto: "pc",
        valor: 5000,
    },
]

let novosValores = valores.map((nv) => nv.valor * 1.1);
console.log(valores)
console.log(novosValores)

const tarefas = [
    {
        texto: "Arroz com feijão",
        bom: true,
    },
    {
        texto: "queijo branco",
        bom: true,
    },
    {
        texto: "pastel de carne com queijo",
        bom: false,
    },
]

let frase =tarefas.map((lendo) => lendo.texto);
console.log(frase)

console.log()

let idadeCandidato = [14, 17, 18, 20, 29, 40]

let alunoAprovado = idadeCandidato.filter ((idade) => {
    return idade >= 15 && idade <=29;
})

console.log(idadeCandidato)
console.log(alunoAprovado)

let valores2 = [1000, 1500, 2000, 2500, 3000, 3500]

let comprar = valores2.filter ((idade) => {
    return idade >= 1000 && idade <=3000;
})

console.log(valores2)
console.log(comprar)