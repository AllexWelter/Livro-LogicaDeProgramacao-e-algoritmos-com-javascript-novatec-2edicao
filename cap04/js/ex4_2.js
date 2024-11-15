// cria referência ao form e ao elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()                 //evita envio do form

    const nome = frm.inNome.value   //obtém valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso              //declara a variável peso
    if(masculino) {       //se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2)   //math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta(altera o conteúdo do elemento h3 da página)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} `

})

frm.addEventListener("reset", () => {
    resp.innerText = '' //limpa ou conteúdo do elemento h3 que exibe a resposta
})


/*
         
    if(masculino) {
        const peso = 22 * Math.pow(altura, 2)       
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} ` 
    } else {
        const peso = 21 * Math.pow(altura, 2) 
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} `
    }

*/

/*
//operador ternário

const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)


*/