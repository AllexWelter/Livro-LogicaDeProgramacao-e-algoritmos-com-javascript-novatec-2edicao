//cria referência ao form e ao elemento h3 (onde será exibido a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acinado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value     //obtém o nome digitado no form
    resp.innerText = `Olá ${nome}!`  //obtém a resposta do programa
    e.preventDefault()              //evita envio do form
})

