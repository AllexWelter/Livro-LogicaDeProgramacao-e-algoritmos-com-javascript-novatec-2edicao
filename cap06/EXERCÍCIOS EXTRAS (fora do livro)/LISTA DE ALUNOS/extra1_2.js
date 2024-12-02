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
        alert("A lista de alunos está vazia!")
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
        alert("Não há aluno dentro da lista.")
        frm.inAluno.focus()
        return
    }

    const nomeRemover = prompt("Qual aluno deseja remover?")
    if(nomeRemover == null || nomeRemover == "") {
        return
    }

    const posicao = alunos.indexOf(nomeRemover)
    if(posicao == -1) {
        alert("Aluno não encontrado na lista")
        return
    }

    alunos.splice(posicao, 1)

    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btPresenca.addEventListener("click", () =>{
    if(alunos.length == 0){
        alert("A lista de alunos está vazia!")
        frm.inAluno.focus()
        return
    }

    const nomeVerificar = prompt("Qual aluno deseja verificar?")
    if(nomeVerificar == null || nomeVerificar == ""){
        return
    }
    
    const presente = alunos.includes(nomeVerificar)

    if(presente) {
        resp3.innerText = nomeVerificar + "está na lista."
    } else {
        resp3.innerText = nomeVerificar + "está ausente na lista."
    }


})