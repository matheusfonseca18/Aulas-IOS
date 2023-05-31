let par1 = document.querySelector("#par1")

const cor = () => {
    par1.style.color = "red"
    par1.innerHTML = "texto mudou"
}

const saiu = () => {
    par1.innerHTML = "Lorem, ipsum dolor."
    par1.style.color = "black"
}

par1.addEventListener("click", cor)
par1.addEventListener("mouseout", saiu)


