const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")


const trocarClube = () => {
    let clube                       //variável que irá receber o nome do clube

    if (frm.rbBrasil.checked) {      //verifica qual radiobutton está selecionado
        clube = "Brasil"
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    // define as as classes dvTitulo: row e cores do clube 
    dvTitulo.className = `row cores-${clube}`

    // modifica a imagem de acordo com a seleção do cliente
    imClube.src = `img/${clube.toLowerCase()}.png`
    imClube.className = "img.fluid"                             //muda o estilo para exibir a imagem
    imClube.alt = `Símbolo do ${clube}`                         //modifica atributo alt

    localStorage.setItem("clube", clube)                        //salva no navegador a escolha do cliente 
}

// associa ao evento change de cada botão do form a função trocarClube

frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbPelotas.addEventListener("change", trocarClube)
frm.rbFarroupilha.addEventListener("change", trocarClube)


const verificarClube = () => {
    if(localStorage.getItem("clube")) {                   //se já estiver salvo algum clube

    }
}