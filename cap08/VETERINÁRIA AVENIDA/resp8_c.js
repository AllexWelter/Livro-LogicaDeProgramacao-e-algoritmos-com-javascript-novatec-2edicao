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
    





})



frm.rbSim.addEventListener("click", () => {
    document.querySelector("#pConvenio").className = "exibe"

})

frm.rbNao.addEventListener("click", () =>{
    document.querySelector("#pConvenio").className = "oculta"
})


const calcularDesconto = (valor, conv) => {
    frm
}