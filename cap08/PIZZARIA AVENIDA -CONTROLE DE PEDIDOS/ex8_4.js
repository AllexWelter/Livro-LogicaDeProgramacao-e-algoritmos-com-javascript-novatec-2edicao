const frm = document.querySelector("form")     //obtém os elementos da página
const resp = document.querySelector("pre")

const itens = []      //vetor global para armazenar os itens do pedido


frm.rbPizza.addEventListener("click", () => {    // quando radio button é clicado
    frm.inBebida.className = "oculta"            // oculta select das bebidas
    frm.inPizza.className = "exibe"              // exibe select das pizzas
})


frm.rbBebida.addEventListener("click", () => {   // quando radio button é clicado
    frm.inPizza.className = "oculta"             // oculta select das pizzas
    frm.inBebida.className = "exibe"             // exibe select das bebidas
})
