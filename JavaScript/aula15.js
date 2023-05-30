let elemento1 = document.querySelector("p"); //selecao por elemento
elemento1.style.color = "blue"

let elemento2 = document.querySelector(".par") //selecao por calsse
elemento2.style.color = "red"

let elemento3 = document.querySelector("#idpar") //selecao por ID
elemento3.style.color = "green"

let elemento4 = (document.querySelector("#idpar2").style.color = "orange") //seletor direto no elemento

const cor = () => {
    let elemento5 = document.querySelector("p")
    elemento5.style.color = "pink";
}

const clicar = () => {
    let elemento5 = document.querySelector("p")
    elemento5.style.color = "green";
    elemento5.innerHTML = "Mdei aqui e fé"
}

const saiu = () => {
    let elemento5 = document.querySelector("p")
    elemento5.style.color = "blue"
    elemento5.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aut consequuntur eos quaerat iusto placeat doloremque totam unde illum! Voluptates ab explicabo, facere sit numquam itaque placeat iure ipsam corporis."
}

let itemLista = document.querySelectorAll("li");
itemLista.forEach((li) => (li.style.color = "purple"))

let lista1 = document.querySelectorAll('.lista');
for (i = 0; i < lista1.length; i++) {
lista1[i].style.color = 'red';
}

for (i = 0; i <= li; i ++) {
    console.log(`contador: ${i}`);
}