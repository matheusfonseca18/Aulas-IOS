let comida = "arroz"

let pessoa = {
    nome: "Matheus",
    sobrenome: "Fonseca",
    idade: 23,
    região: "norte",
    corDosOlhos: "preto",
    hobbies: ["jogar", "dormir", "comer"],
    endereco: {
        rua: "Av.paulista",
        cep: 02634-070
    } 
}
console.log(pessoa)

let pessoa2 = {
    nome: "Paula",
    sobrenome: "dos Anjos",
    idade: 20,
    corDosOlho: "castanho",
    hobbies: ["ler", "dormir", "mexer no celular"],
    endereco: {
        rua: "antonio cavazzam",
        cep: 03424-0000
    }
}

console.log(pessoa2)

let pessoa3 = {
    nome: "Cleitin",
    sobrenome: "do Gás",
    idade: 22,
    corDosOlhos: "azul",
    hobbies: ["comer", "dormir", "cozinhar"],
    endereco: {
        rua: "aquela lá",
        cep: 12345-678
    }
}

console.log(pessoa3)

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco.rua)

console.log(`O ${pessoa.nome} que tem ${pessoa.idade} anos namora a ${pessoa2.nome} que tem ${pessoa2.idade} anos`)

console.log()

console.log(`O ${pessoa3.nome} ${pessoa3.sobrenome} que tem ${pessoa3.idade} anos, foi entregar gás na casa da ${pessoa2.nome} e se perdeu na rua ${pessoa2.endereco.rua}`)