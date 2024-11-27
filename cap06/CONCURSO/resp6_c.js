// c) Elaborar um programa que leia o nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão Aprovados 2º Fase, ler o número de acertos para aprovação dos candidatos para a 2º fase do concurso. O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram, nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.


const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({ nome, acertos })                            //candidatos.push({nome: nome, acertos: acertos})

    frm.inNome.value = ""
    frm.inAcertos.value = ""
    frm.inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))           //dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista")
        return
    }

    let lista = ""                                     //para concatenar lista de candidatos
    for (const candidato of candidatos) {
        lista += candidato.nome + " - " + candidato.acertos + " acertos\n"
    }
    resp.innerText = lista
})

frm.btAprovados.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista")
        return
    }

    const corte = Number(prompt("Número de Acertos para Aprovação? "))
    if (corte == 0 || isNaN(corte)) {
        alert("Número inválido")
        return
    }

    const copia = candidatos.slice()                      //cria uma cópia do vetor candidatos
    copia.sort((a, b) => {a.acertos - b.acertos})      //ordena o vetor copia pelos acertos (regra para ficar crescente => a.acertos - b.acertos)
    copia.reverse()                                   //inverte a ordem dos elementos (para ficar decrescente) 

    let aprovados = ""                              //para concatenar aprovados
    for(const candidato of copia) {
        if(candidato.acertos >= corte) {
            aprovados += candidato.nome + " - " + candidato.acertos + " acertos\n"
        }
    }
    if(aprovados == "") {
        resp.innerText = "Não há candidatos aprovados...."
    } else {
        resp.innerText = aprovados
    }
})