const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const alunos = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const aluno = frm.inAluno.value
    alunos.push = (aluno)

    frm.bListar.dispatchEvent(new Event("click"))

    frm.inAluno.value = ""
    frm.inAluno.focus()
})

frm.bListar.addEventListener("click", () =>{
    
})