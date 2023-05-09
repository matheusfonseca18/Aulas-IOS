// crie um programa que solicite ao usuário que digite a sua 
// altura em metros e o seu peso em quilogramas. Em seguida, o programa deve calcular o 
// índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / altura*2 e 
// verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O programa deve 
// imprimir na tela se o IMC está dentro do intervalo saudável ou não

let altura = Number(prompt (`Digite sua altura em metros. Ex: 1.70`))
let peso = Number(prompt (`Digite seu peso em quilogramas. Ex: 66.5`))
let IMC = peso/(altura *altura)
alert (`${IMC}`)

if (IMC >= 18.5 ) {
     alert(`Seu IMC é ${IMC} e está saudável`)
} else {
     alert(`Seu IMC é ${IMC} e não está saudável`)
}