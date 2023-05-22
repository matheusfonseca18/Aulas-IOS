class Pessoa {
    constructor (Nome, Sobrenome, Idade, DataNasc, Endereco) {
        this.Nome = Nome;
        this.Sobrenome = Sobrenome;
        this.Idade = Idade;
        this.DataNasc = DataNasc;
        this.Endereco = Endereco;
    }
}

class Pet {
    constructor (Nome, Raca, Cor, Idade, Gosta) {
        this.Nome =Nome;
        this.Raca = Raca;
        this.Cor = Cor
        this.Idade = Idade;
        this.Gosta = Gosta;
    }
}

let matheus = new Pessoa("Matheus", "Fonseca" , 23 , "18/02/2000" , "R. Desemb. Rodrigues Sette" )

let paula = new Pessoa("Paula" , "dos Anjos", 20 , "28/12/2002" , "R. Antonio cavazzam")

let gabriel = new Pessoa("Gabriel" , "Pereira" , 25 , "04/05/1998" , "R. Desemb. Rodrigues Sette")

let malu = new Pet("Malu" , "Vira-lata" , "Marrom e branco" , 0.7 , "Brincar")

let fredericksen = new Pet("Fredericken" , "Pug" , "Bege" , 7 , "Comer")

let farofa = new Pet("Farofa" , "Shitzu" , "Bege e branco" , 2 , "Passear")

console.log(`O ${matheus.Nome} tem a ${malu.Nome} que é da raça ${malu.Raca} e gosta muito de ${malu.Gosta}`)

console.log()

console.log(`O ${fredericksen.Nome} que é da raça ${fredericksen.Raca} e tem ${fredericksen.Idade} anos de idade é da ${paula.Nome}`)

console.log()

console.log(`O ${gabriel.Nome} tem um cachorro que se chama ${farofa.Nome} e é da raça ${farofa.Raca}`)