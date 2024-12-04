/*
a) Você deve desenvolver um programa de criptografia para transmitir mensagens entre amigos. O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas as letras das posições pares da mensagem; b) exibir todas as letras das posições ímpares da mensagem. O programa deve conter ainda um botão para decriptografar a mensagem, ou seja, retornar a mensagem original a partir do texto cifrado.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const mensagem = frm.inMensagem.value

    let resposta = ""
    const tam = mensagem.length

    //laço para pegar as letras das posições pares (na programação, ímpares)
    for (let i = 1; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }
    //laço para pegar as letras das posições ímpares (na programação, pares)
    for (let i = 0; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    resp.innerText = resposta
})

