//UM SUPERMERCADO ESTÁ COM UMA PROMOÇÃO - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço do produto. Após, apresente as mensagens indicando a promoção.

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const calcPromo = (preco * 3)
    const promo = preco / 2
    const vFinal = calcPromo - promo
    resp1.innerText =`${produto} - Promoção: Leve 3 por R$: ${vFinal.toFixed(2)} `
    resp2.innerText =`O 3º produto custa apenas R$: ${promo.toFixed(2)}`
    
    e.preventDefault()
})