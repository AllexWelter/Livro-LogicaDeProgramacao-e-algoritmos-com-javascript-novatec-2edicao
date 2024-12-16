/* c) Elaborar um programa para uma veterinária, o qual leia o preço de uma vacina e se o cliente possui ou não convênio. Caso possua algum convênio, exibir uma caixa de seleção com os convênios "Amigos dos Animais" e "Saúde Animal". O programa deve exibir o valor do desconto (10% sem convênio; 20% para "Amigos dos Animais"; 50% para "Saúde Animal") e o valor a ser pago. Criar a função:

    * calcularDesconto() - que receba os parâmetros valor e taxa de desconto. Retornar o valor do desconto.

*/

const frm = document.querySelector("form")
const convenio = document.querySelector("#pConvenio")
const resp1 = document.querySelector("#outDesconto")
const resp2 = document.querySelector("#outPagar")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    
    let desconto

   if (frm.rbSim.checked) {
    if (frm.selConvenio.value == "amigo") {
        desconto = calcularDesconto(valor, 20)
    } else {
        desconto = calcularDesconto(valor, 50)
    }
   } else {
    desconto = calcularDesconto(valor, 10)
   }

   resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`
   resp2.innerText = `A Pagar R$: ${valor-desconto.toFixed(2)}`

})



frm.rbSim.addEventListener("click", () => {
    document.querySelector("#pConvenio").className = "exibe"

})

frm.rbNao.addEventListener("click", () =>{
    document.querySelector("#pConvenio").className = "oculta"
})

const calcularDesconto = (valor, taxa) => valor * (taxa/100)