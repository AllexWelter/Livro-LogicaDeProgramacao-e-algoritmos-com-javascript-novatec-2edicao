//ELABORAR UM PROGRAMA PARA UMA LAN HOUSE DE UM AEROPORTO - O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.

const resp = document.querySelector("h3")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const tempo = Number(frm.inTempo.value)

    const aPagar = Math.ceil(tempo / 15) * preco
    
    resp.innerText = `Valor a pagar R$: ${aPagar}` 

    e.preventDefault()
})