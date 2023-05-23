document.title = "Hacked by lil joseph";

let titi = document.createElement ("h2");
titi.innerHTML = "Título de h2 criado por JS"
document.body.appendChild(titi)

let paragrafo1 = document.createElement ("p");
paragrafo1.innerHTML = "paragrafo criado por JS Hacked by lil joseph kkkkk ";
document.body.appendChild(paragrafo1);

let paragrafo2 = document.createElement ("p");
paragrafo2.innerHTML = "Hacked by lil joseph kkkkk ";
document.body.appendChild(paragrafo2);

let titulo = document.getElementById("meuTitulo")
titulo.innerHTML = "Salve, salve family"
titulo.style.color = "red"
titulo.style.textAlign = "center"
titulo.style.backgroundColor = "black"

let paragraph = document.getElementById("pr1")
paragraph.style.textAlign = "justify"
paragraph.style.color = "grey"
paragraph.style.fontSize = "2rem"

let items = document.getElementsByClassName(`item`)
items[1].style.color = "blue"

const mudaCor = () => {
    let valorh2 = document.getElementById("t2")

    valorh2.style.color = "red"
}

const mudaCor2 = () => {
    let valorh2 = document.getElementById("t2")

    valorh2.style.color = "green"
}