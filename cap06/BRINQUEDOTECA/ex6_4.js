const frm = document.querySelector("form")               //obtém elementos a serem manipulados
const resp = document.querySelector("pre")
const criancas = []                                     //declara vetor global

frm.addEventListener("submit", (e) =>{ 
    e.preventDefault()                                    //evita envio do form
    const nome = frm.inNome.value                        //obtém conteúdo dos campos
    const idade = Number(frm.inIdade.value)
    criancas.push({ nome, idade })                     //adiciona dados ao vetor de objetos 
})
