const frm = document.querySelector("form")               //obtém elementos a serem manipulados
const resp = document.querySelector("pre")
const criancas = []                                     //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()                                    //evita envio do form
    const nome = frm.inNome.value                        //obtém conteúdo dos campos
    const idade = Number(frm.inIdade.value)
    criancas.push({ nome, idade })                     //adiciona dados ao vetor de objetos
    frm.reset()                                       //limpa campos do form
    frm.inNome.focus()                               //posiciona no campo do formulário
    frm.btListar.dispatchEvent(new Event("click"))   //dispara um click em btListar 
})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {                        //se vazio, exibe alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = ""                                   //para concatenar lista de crianças
    for (const crianca of criancas) {
        const { nome, idade } = crianca             //desestrutura objeto
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista                         //exibe a lista
})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas]                      //cria cópia do vetor criança
    copia.sort((a, b) => a.idade - b.idade)         //ordena pela idade
    let resumo = ""                                //para concatenar saída
    let aux = copia[0].idade                      //menor idade do vetor ordenado
    let nomes = []                               //para inserir nomes de cada idade
    for (const crianca of copia) {
        const { nome, idade } = crianca
        if (idade == aux) {                    //se é da mesma idade auxiliar...
            nomes.push(nome)                  //adiciona ao vetor nomes
        }
        else {                              //senão, monta o resumo para cada idade
            resumo += aux + " anos(s): " + nomes.length + "criancas(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            resp.innerText = resumo                    //exibe a resposta
        }
    })