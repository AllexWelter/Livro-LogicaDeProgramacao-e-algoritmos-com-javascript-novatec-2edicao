const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")


const trocarClube = () => {
    let clube                       //variável que irá receber o nome do clube
    
    if(frm.rbBrasil.checked) {      //verifica qual radiobutton está selecionado
        clube = "Brasil"
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }
}

// define as as classes dvTitulo: row e cores do clube 
dvTitulo.className = `row cores-${clube}`

// modifica a imagem de acordo com a seleção do cliente
