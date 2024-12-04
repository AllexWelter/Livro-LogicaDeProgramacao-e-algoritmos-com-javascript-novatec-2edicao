/*
b) Uma palavra ou frase é um palíndromo quando pode ser lida nos dois sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia uma frase e informe se ela é ou não um palíndromo (converter a frase para caixa alta).
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value.toUpperCase()

    if (frase.indexOf(" ") == -1) {
        alert("Informe, por favor, uma frase")
        frm.inFrase.focus()
        return
    }

    //retira os espaço em branco da frase
    const frase2 = frase.replace(/ /g, "")
    const tam = frase2.length

    let iguais = true

    //for repete até a metade (compara as primeira letras com as últimas)
    for (let i = 0; i < tam / 2; i++) {
    //verifica se a primeira letra é diferente da última (e sucessivamente)
        if (frase2[i] != frase2[tam - 1 - i]) {
            iguais = false
            break
        }
    }

    if (iguais) {
        resp.innerText = `${frase} é um Palíndromo`
    } else {
        resp.innerText = `${frase} não é um Palíndromo`
    }

})