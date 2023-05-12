let desconto = prompt("Digite um cupom, ex: DESC1, DESC2, DESC3, DESC4 ou DESC5")
let valor = 1000

switch (desconto.toUpperCase()) {
  case "DESC1":
    valor *=0.95
    alert("Valor original do produto R$1000.00")
    alert("Valor com desconto R$"+ valor.toFixed(2));
    break

    case "DESC2":
    valor *=0.90
    alert("Valor original do produto R$1000.00")
    alert("Valor com desconto R$"+ valor.toFixed(2));
    break

    case "DESC3":
    valor *=0.85
    alert("Valor original do produto R$1000.00")
    alert("Valor com desconto R$"+ valor.toFixed(2));
    break

    case "DESC4":
    valor *=0.80 
    alert("Valor original do produto R$1000.00")
    alert("Valor com desconto R$"+ valor.toFixed(2));
    break

    case "DESC5":
    valor *=0.75;
    break

    default:
      alert("Esse cupom nao existe")
}
