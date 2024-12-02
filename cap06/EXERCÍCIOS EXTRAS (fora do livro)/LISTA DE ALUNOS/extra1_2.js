const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const alunos = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const aluno = frm.inAluno.value
    alunos.push(aluno)    //chamar o método push() como função 

    frm.btListar.dispatchEvent(new Event("click"))

    frm.inAluno.value = ""
    frm.inAluno.focus()
})

frm.btListar.addEventListener("click", () =>{
    if(alunos.length == 0) {
        alert("A lista de Alunos está vazia!")
        frm.inAluno.focus()
        return
    }
  
    let lista = " "
    
    for(let i = 0; i < alunos.length; i++) {
        lista += (i + 1) + ". " + alunos[i] + "\n"
    }
    resp1.innerText = lista
})

frm.btRemover.addEventListener("click", () =>{
    if(alunos.length == 0) {
        alert("Não há Aluno dentro da lista.")
    }
})