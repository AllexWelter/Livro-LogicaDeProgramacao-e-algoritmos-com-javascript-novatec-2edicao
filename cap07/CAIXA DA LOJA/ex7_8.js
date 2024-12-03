const frm = document.querySelector("form")    //obtém elementos do página
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100         //multa por atraso
const TAXA_JUROS = 0.33 / 100      //juros por dia de atraos


frm.addEventListener("submit", (e) =>{
    e.preventDefault()                    //evita envio do form

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)

    const hoje = new Date()              //cria variáveis (instancia objetos)
})
