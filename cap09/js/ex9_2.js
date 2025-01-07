const inRadios = document.querySelectorAll("input")                //captura as tags input da página

// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]   //vetor com a lista de clubes

    let selecao
// percorre os inRadios para verificar qual está selecionado
for (let i = 0; i < inRadios; i++) {
    if (inRadios[i].checked) {
        selecao = i                                       //se selecionado, armazena índice do radio selecionado
        break                                             //e sai da repetição
    }
}  
}