/* b) Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as seguintes funções:

    * validarNome() - que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto).

    * obterSobrenome() - que receba um nome como parâmetro e retorne o último nome do aluno em letra minúsculas.

    * contarVogais() - que receba um nome e retorne o número de vogais deste, com dois dígitos

*/


const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

        const aluno = frm.inAluno.value

        if(validarNome(aluno) == false) {
            resp.innerText = " "
            return
        }

        const sobrenome = obterSobrenome(aluno)
        const vogais = contarVogais(aluno)

        resp.innerText = `Senha Inicial: ${sobrenome}${vogais.toString().padStart(2, "0")}` 

})
  
const validarNome = nome => {  
    if(nome.includes(" ")) {
        return true
    } else {
        alert("Por favor, informe um nome completo.")
        return false
    }       
}
  
const obterSobrenome = nome => {
    const partes = nome.split(" ")
    return partes[partes.length - 1].toLowerCase()
}  
   
const contarVogais = nome => {
    const vogais = "aeiouAEIOU"
    let contador = 0

    for (const letra of nome) {
        if (vogais.includes(letra)) {
            contador++
        } 
    } 
    return contador
}


