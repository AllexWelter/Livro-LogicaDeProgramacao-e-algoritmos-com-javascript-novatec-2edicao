/*
c) Suponha que o prazo para o pagamento de uma infração de trânsito com desconto seja de 90 dias. Elaborar um programa que leia a data de uma infração e o valor da multa. Informe queal a data limite do pagamento com desconto (até 90 dias) e o valor a ser pago até essa data (com 20% de desconto).
*/


const frm = document.querySelector("form")
const resp1 = document.querySelector("#outDataLimite")
const resp2 = document.querySelector("#outComDesconto")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const data = frm.inData.value
    const valor = Number(frm.inValor.value)

    //declara variável do tipo date
    const dataLimite = new Date()

    //obtém as partes do tipo date
    const partes = data.split("-")
    //"seta" as partes da data
    dataLimite.setDate(Number(partes[2]))
    dataLimite.getMonth(Number(partes[1]) - 1)
    dataLimite.getFullYear(Number(partes[0]))

    const dia = dataLimite.getDate()  //obtém o dia da multa

    dataLimite.setDate(dia + 90)      //aumenta 90 dias na data da multa
    const mes = dataLimite.getMonth() + 1
    const ano = dataLimite.getFullYear()

    const comDesconto = valor * 0.80

    resp1.innerText = "Data limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
    resp2.innerText = "Valor com Desconto R$: " + comDesconto.toFixed(2)
})