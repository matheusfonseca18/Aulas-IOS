// 2 - Utilizando os conceitos apresentados, pergunte ao usuário. 
// • Qual o nome do usuário; 
// • Qual sua idade; 
// • Bairro onde mora; 
// • Passe o nome do usuário para todas as letras em maiúscula. 
// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o 
// resultado da soma desses números na tela.

let nome = prompt("Qual seu nome?")
let caps = (nome.toUpperCase())
let idade = prompt(`${caps}, qual sua idade?`)
let bairro = prompt(`${caps}, que tem ${idade}, qual bairro você mora?`)
let num1 = Number (prompt(`${caps}, que tem ${idade} que mora no ${bairro}, digite um numero`))
let num2 = Number (prompt(`Digite outro numero`))
let resp = num1 + num2
alert (`A soma dos dois números é = ${resp}`)

