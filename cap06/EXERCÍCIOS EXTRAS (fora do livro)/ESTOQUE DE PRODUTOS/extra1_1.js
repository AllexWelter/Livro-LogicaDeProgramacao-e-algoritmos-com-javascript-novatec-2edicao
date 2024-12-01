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
    
    const nome = frm.inNome.value.trim()     //remove espaços desnecessários
    const num = Number(frm.inQuantidade.value)

    const existente = produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())
        if(existente) {
            existente.num += num            //atualiza a quantidade do produto existente
        } else {
            produtos.push({nome, num})      //adiciona um novo produto 
        }
    
    frm.inNome.value = ""
    frm.inQuantidade.value = ""
    frm.inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))      //dispara click em btListar   
})

frm.btListar.addEventListener("click", () =>{
    if(produtos.length == 0) {
        resp1.innerText = "Nenhum produto no estoque."
        resp2.innerText = " "  //Limpa qualquer mensagem anterior
        return
    }

    let lista = "Lista Geral de Produtos:\n"
    produtos.forEach(produto =>  {
        lista += `${produto.nome} -> ${produto.num}\n`
    })
    resp1.innerText = lista                      //exibe lista de produtos no primeiro <pre>
    
    const zerados = produtos.filter(produto => produto.num === 0)   //filtra produtos com quantidade 0 

    if(zerados.length === 0) {
        resp2.innerText = "Não há produtos com estoque zerado."
    } else {
        let listaZerados = "Produtos com estoque zerado:\n"
        zerados.forEach(produto => {
            listaZerados += produto.nome + "\n"
        })
        resp2.innerText = listaZerados
    }
})

frm.btRemover.addEventListener("click", () =>{
    const nome = frm.inNome.value.trim()

    if(produtos.length == 0) {
        alert("Produto não localizado ou não existe produto para remoção!")
        return
    }

    const indice = produtos.findIndex(produto => produto.nome.toLowerCase() === nome.toLowerCase())      //Procura o índice do produto no array

    if(indice === -1) {
        alert("Produto não encontrado.")
    } else {
        produtos.splice(indice, 1)     //remove produto pelo índice
        alert(`Produto ${nome} removido com sucesso.`)
        frm.btListar.dispatchEvent(new Event("click"))  //atualiza a lista 
    }
    frm.inNome.value = ""
    frm.inNome.focus()

})