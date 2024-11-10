//UMA FARMÁCIA ESTÀ COM PROMOÇÃO - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const produto = frm.inProduto.value

    const promo = Math.floor(preco * 2)
    resp1.innerText = `Promoção de ${produto}.`
    resp2.innerText = `Leve 2 por apenas R$ ${promo.toFixed(2)}.`
    
    e.preventDefault()
})