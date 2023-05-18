// 1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar 
// um novo array contendo o dobro de cada elemento.

let numbers = [1, 2, 3, 4, 5]

let dobro = numbers.map((x2) => x2 * 2)
console.log(numbers)
console.log(dobro)

console.log()
// 2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar 
// um novo array contendo apenas os números pares.

let par =numbers.filter((pares) => {
    return pares  % 2 == 0
})
console.log(par)


console.log()
// 3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método 
// forEach para exibir cada fruta no console.

fruits = ['apple', 'banana', 'orange', 'kiwi']

let frutas = fruits.forEach((nome) => {
    console.log(`A fruta ${nome} é boa`)
})

console.log()
// 4 - Dado o array students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 25 }, 
//     { name: 'Mark', age: 22 }
//     ], 
//     Utilize o método forEach para exibir o nome e a idade de cada aluno no 
//     console.
    
let students = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Jane',
        age: 25
    }, 
    {
        name: 'Mark',
        age: 22 
    }
]

let estudantes = students.forEach(pessoa => {
    console.log(`O aluno ${pessoa.name} tem ${pessoa.age} anos de idade`)
})

console.log()
// students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 25 }, 
//     { name: 'Mark', age: 22 }
//     ], 

let names = students.map((alunos) => {
    console.log(alunos.name )
})
