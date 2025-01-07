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

if (selecao <= 2) {                                       //se selecao <= 2, então torce por algum clube
    dvTitulo.className = `row cores-${clubes[selecao]}`   //modifica a cor
    //muda a propriedade src com a imagem do clube selecionado
    imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
    imClube.className = "img-fluid"                       //muda estilo para exibir imagem
    imClube.alt = `Símbolo do ${clubes[selecao]}`         //texto alternativo
    localStorage.setItem("clube", clubes[selecao])        //salva nome do clube
} else {                                                  //se selecionou nenhum
    dvTitulo.className = "row"                            //tira a classe de cor de divTitulo
    imClube.className = "d-none"                          //oculta a imagem
    imClube.alt = ""                                      //limpa texto alternativo
    localStorage.removeItem("clube")                      //remove variável do localStorage
}

const verificarClube = () => {
    
}

}