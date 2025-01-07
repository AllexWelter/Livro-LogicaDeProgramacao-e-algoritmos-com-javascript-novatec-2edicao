const inRadios = document.querySelectorAll("input")                //captura as tags input da página

//percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}