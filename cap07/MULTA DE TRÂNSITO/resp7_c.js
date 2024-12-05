/*
c) Suponha que o prazo para o pagamento de uma infração de trânsito com desconto seja de 90 dias. Elaborar um programa que leia a data de uma infração e o valor da multa. Informe queal a data limite do pagamento com desconto (até 90 dias) e o valor a ser pago até essa data (com 20% de desconto).
*/


const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const data = frm.inData.value
})