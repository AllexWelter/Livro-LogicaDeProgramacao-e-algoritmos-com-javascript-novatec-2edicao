const frm = document.querySelector("form")         //obtém os elementos da página
const repLista = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    e.preventDefault()                           //evita envio do form

    const nome = frm.inNome.value                //conteúdo do campo nome
    const peso = Number(frm.inPeso.value)        //conteúdo do campo peso (em número)


 //chama function que verifica se peso já foi apostado   
    
})