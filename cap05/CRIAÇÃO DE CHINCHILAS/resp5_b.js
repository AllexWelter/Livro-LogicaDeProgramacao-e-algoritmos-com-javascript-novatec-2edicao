//Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a 2 (um casal).

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numChinchilas = Number(frm.inChinchilas.value)
    const numAnos = Number(frm.inAnos.value)

    //cria uma variável do tipo String, que irá concatenar a resposta
    let resposta = ""
    let total = numChinchilas

    for (let i = 1; i <= numAnos; i++ ) {
        resposta = resposta + i + "º Ano: " + total + " Chinchilas\n"
        total = total * 3
    }
    resp.innerText = resposta
})

