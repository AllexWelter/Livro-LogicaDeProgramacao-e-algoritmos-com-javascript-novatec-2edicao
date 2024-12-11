const frm = document.querySelector("form")              //obtém os elementos da página
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")
const resp3 = document.querySelector("outResp3")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = 

})