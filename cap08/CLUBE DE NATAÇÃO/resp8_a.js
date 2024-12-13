/* a) Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O programas deve exibir o nome com " - " abaixo das letras do nome e a categoria do atleta, que pode ser "infantil" (até 12 anos), "Juvenil" (entre 13 e 18 anos) ou "Adulto" (acima de 18 anos). O programa deve conter as funções:

    * retornarTracos() - que receba um nome como parâmetro e retorne uma linha com " - " para as letras do nome (nos espaços, manter os epaços).

    * categorizarAluno() - que receba um número como parâmetro e retorne a categoria do aluno, conforme indicação no enunciado do programa.

*/

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const atleta = frm.inAtleta.value
    const idade = Number(frm.inIdade.value)

    const sublinhado = gerarTracos(atleta)
    const categoria = verCategoria(idade)

    resp.innerText = atleta + "\n" + sublinhado + "\n" + "Categoria: " + categoria

})


const gerarTracos = nome => {
    let tracos = ""

    for (const letra of nome) {
        if (letra != " ") {
            tracos += "-"
        } else {
            tracos += " "
        }
    }
        return tracos
}

const verCategoria = idade => {
    let cat

    if(idade <= 12) {
        cat = "Infantil"
    } else if (idade <= 18) {
        cat = "Juvenil"
    } else {
        cat = "Adulto"
    }
        return cat
}