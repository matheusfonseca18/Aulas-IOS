const mediaAluno = () => {
    let notaT1 = document.getElementById("nota01");
    let notaT2 = document.getElementById("nota02");
    let res = document.getElementById("resultado")

    let notaN1 = Number(notaT1.value);
    let notaN2 = Number(notaT2.value);

    let resultado = (notaN1 + notaN2) / 2

    res.innerHTML = `Sua média é: ${resultado}`
}