// function calMedia (nota1, nota2) {

//     return (nota1 + nota2) / 2
// }

// let media = calMedia (10, 8)

// console.log(media)

// console.log (calMedia (10,5))

function IMC (peso,altura) {
    return peso / (altura*altura)
}

let calculo = IMC (58,1.70)

console.log (IMC (58,1.70).toFixed(2))

console.log(calculo.toFixed(2))

if (calculo >= 18.5 && calculo <= 24.9) {
    console.log(`Seu IMC é de ${calculo.toFixed(2)} e está saudável.`);
  } else {
    console.log(`Seu IMC é de ${calculo.toFixed(2)} e não está saudável.`);
  }
