const frm = document.querySelector("form")     //obtém os elementos da página
const resp = document.querySelector("pre")

const itens = []      //vetor global para armazenar os itens do pedido


frm.rbPizza.addEventListener("click", () => {    // quando radio button é clicado
    frm.inBebida.className = "oculta"            // oculta select das bebidas
    frm.inPiiza.className = "exibe"              //exibe select das pizzas
})

