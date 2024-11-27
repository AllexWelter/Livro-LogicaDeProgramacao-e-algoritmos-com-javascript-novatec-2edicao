// c) Elaborar um programa que leia o nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão Aprovados 2º Fase, ler o número de acertos para aprovação dos candidatos para a 2º fase do concurso. O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram, nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.


const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const candidatos = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const nome = frm.inNome.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({nome, acertos})                            //candidatos.push({nome: nome, acertos: acertos})

    frm.inNome.value = ""
    frm.inAcertos.value = ""
    frm.inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))           //dispara click em btListar

})

frm.btListar.addEventListener("click", () =>{
    if(candidatos.length == 0) {
        alert("Não há candidatos na lista")
        return
    }

   let lista = ""                                     //para concatenar lista de candidatos
   for(const candidato of candidatos) {
        lista += candidato.nome + " - " + candidato.acertos + "acertos\n"
   }
   resp.innerText = lista 
})

frm.btAprovados.addEventListener("click", () => {
    if(candidatos.length == 0) {
        alert("Não há candidatos na lista")
    }
})