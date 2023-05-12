let sorteado = Math.floor(Math.random() * 11);
let num;
while (num !== sorteado) {
  num = Number(prompt("Digite um numero de 0 a 10"));

  if (num < 0 || num > 10) {
    alert("Digite um numero de 0 a 10 ");
  }  else if (num === sorteado) {
    alert("Parabéns, você acertou!");
  } else {
    alert("Tente novamente")
  }
}