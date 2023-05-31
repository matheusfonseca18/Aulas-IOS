//funcao para fazer o calculo e exibir a mensagem na tela
const calcular = () => {

//pegar o valor que o usuario digitar e armazenar na variavel
let peso = Number(document.querySelector("#peso").value); 
let altura = Number(document.querySelector("#altura").value); 

//faz o calculo e armazena
let imc = peso / (altura * altura);

// variaveis com a mensagem
let resultadoBom = `Seu IMC é de ${imc.toFixed(2)} e está saudável.`;

let resultadoRuim = `Seu IMC é de ${imc.toFixed(2)} e não está saudável.`;

//if esle pra mostrar a mensagem do resultado
if (imc >= 18.5 && imc <= 24.9) {
    document.querySelector("#resultado").innerHTML = resultadoBom
  } else {
    document.querySelector("#resultado").innerHTML = resultadoRuim
  }
}

