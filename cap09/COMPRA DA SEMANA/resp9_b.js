const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const produto = frm.inProduto.value

    //se houver dados salvo
    if (localStorage.getItem("comprasProduto")) {
        //obtém itens separando-os em elemento de vetor
        const produtos = localStorage.getItem("comprasProduto").split(";")

        //adiciona o novo produto ao vetor
        produtos.push(produto)

        //classifica o vetor
        produtos.sort()

        //salva vetor classificado (com elementos separados por "")
        localStorage.setItem("comprasProduto", produtos.join(";"))
    }else {
        //senão (é a primeira inclusão), salva apenas o produto
        localStorage.setItem("compraProduto", produto)
    }

    listarProdutos()

    frm.reset()             //ou frm.inProduto.value = ""
    frm.inProduto.focus()

})

const listarProdutos = () => {
    if(!localStorage.getItem("comprasProduto")) {
        resp.innerText = ""
        return
    }
    
    const produtos = localStorage.getItem("comprasProduto").split(";")

    resp.innerText = `Produtos Adicionados\n-------------------\n${produtos.join("\n")}`
}
window.addEventListener("load", listarProdutos)

frm.btLimpar.addEventListener("click", () => {
    if(localStorage.getItem("comprasProduto")) {
        if (confirm("Deseja realmente excluir todo os itens da lista?")) {
            localStorage.removeItem("comprasProduto")
            listarProdutos()
        }
    } else {
        alert("Lista está vazia...")
    }
    frm.inProduto.focus()
})