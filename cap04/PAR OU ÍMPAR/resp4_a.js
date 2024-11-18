//Elaborar um programa que leia números. Informe se ele é par ou ímpar. Faça com o if...else... tradicional e, após, tente criar a condição com o operador ternário.

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    //OPERADOR TERNÁRIO
    const calc = num % 2 == 0 ? "Par" : "Ímpar"
    resp.innerText = `${num} é ${calc}`   
})




/*
IF E ELSE 
const num = Number(frm.inNumero.value)
    if(num % 2 == 0) {
        resp.innerText = `${num} é Par`
    } else {
        resp.innerText = `${num} é Ímpar `
    }

*/

/*
IF E ELSE 
const num = Number(frm.inNumero.value)
let calc = ""
    if(num % 2 == 0) {
        calc = "Par"
    } else {
        calc = "Ímpar"
    }
resp.innerText = `${num} é ${calc}`
*/