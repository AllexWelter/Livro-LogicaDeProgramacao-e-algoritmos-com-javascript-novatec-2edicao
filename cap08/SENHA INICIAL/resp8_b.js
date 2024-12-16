/*b) Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as seguintes funções:

    * validarNome() - que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto).

    * obterSobrenome() - que receba um nome como parâmetro e retorne o último nome do aluno em letra minúsculas.

    * contarVogais() - que receba um nome e retorne o número de vogais deste, com dois dígitos

*/


const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

        const aluno = frm.inAluno.value

        const nomeValido = validarNome(aluno)
        const sobrenome = obterSobrenome

})


const validarNome = nome => {
    let nome = "" 
    if(nome = " ") {
        true
    } else {
        false
    }
    return nome
}

const obterSobrenome = nome 