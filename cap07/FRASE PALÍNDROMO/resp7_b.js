/*
b) Uma palavra ou frase é um palíndromo quando pode ser lida nos dois sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia uma frase e informe se ela é ou não um palíndromo (converter a frase para caixa alta).
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const frase = frm.inFrase.value
    
})