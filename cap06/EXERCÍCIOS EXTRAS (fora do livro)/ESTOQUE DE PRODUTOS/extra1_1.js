/*
//Desenvolva um programa que gerencie um estoque de produtos em uma loja. O programa deve ter as seguintes funcionalidades:
Adicionar Produto: O programa deve permitir que o usuário insira o nome do produto e quantidade inicial.
    Caso o nome já exista, deve apenas atualizar a quantidade do produto
    Exibir a lista atualizada após cada inclusão ou atualização.

Remover produto: Deve permitir que o usuário remova produtos do estoque com base no nome informado.
    Caso o nome não seja encontrado, exibir uma mensagem de erro.

Listar produtos com estoque zerado: Ao clicar em um botão, listar todos os produtos cuja quantidade seja igual a zero.
    Caso não haja produtos com estoque zero, exibir uma mensagem apropriada.
*/


const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const produtos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const nome = frm.inNome.value
    const num = Number(frm.inQuantidade.value)
    produtos.push({nome, num})           //objeto deve ser declado entre {}
    
    frm.inNome.value = ""
    frm.inQuantidade.value = ""
    frm.inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))      //dispara click em btListar   
})

frm.btListar.addEventListener("click", () =>{
    if(produtos.length == 0) {
        alert("Favor inserir dados!")
        return
    }
    let lista = ""
    for(const produto of produtos) {
        lista += produto.nome + " -> " + produto.num + "\n"
    }
    resp1.innerText = lista    
})

frm.btRemover.addEventListener("click", () =>{
    if(produtos.length == 0) {
        alert("Produto não localizado ou não existe produto para remoção!")
    }


})