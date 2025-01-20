const frm = document.querySelector("form")         //obtém os elementos da página
const repLista = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    e.preventDefault()                           //evita envio do form

    const nome = frm.inNome.value                //conteúdo do campo nome
    const peso = Number(frm.inPeso.value)        //conteúdo do campo peso (em número)


 //chama function que verifica se peso já foi apostado   
    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) {       //se houver dados em localStorage
//obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso  
    localStorage.setItem("melanciaNome", melanciaNome)   //salva os dados
    localStorage.setItem("melanciaPeso", melanciaPeso)  
    } else {                                             //senão, é a primeira aposta
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)     

    }

    mostrarApostas()           //chama function que mostra as apostas já salvas
    frm.reset()                //limpa o form
    frm.inNome.focus()         //joga o foco (cursor) no campo inNome



})