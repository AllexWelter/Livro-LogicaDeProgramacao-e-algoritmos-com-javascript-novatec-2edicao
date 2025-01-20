const frm = document.querySelector("form")         //obtém os elementos da página
const respLista = document.querySelector("pre")


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

const verApostaExiste = (peso) => {
    if(localStorage.getItem("melanciaPeso")) {          //se existir dados em localStorage
//obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
    const pesos = localStorage.getItem("melanciaPeso").split(";")
    
//O peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString())
    }else {
        return false 
    }
}

const mostrarApostas = () => {
//se não há apostas armazenadas em localStorage
   if(!localStorage.getItem("melanciaNome")) {
//limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
    respLista.innerText = " "
    return                   //retorna (não executa os comandos abaixo)   
   }     

//Obtém o conteúdo das variáveis salvas no localStorage, separando-as em elementos de vetor a cada ocorrência do ";"
   const nomes = localStorage.getItem("melanciaNome").split(";")
   const pesos = localStorage.getItem("melanciaPeso").split(";")

   let linhas = " "      //irá acumular as linhas a serem exibidas

//repetição para percorrer todos os elementos do vetor 
    for (let i = 0; i < nomes.length; i++) {
//concatena em linhas os nomes dos apostadores e suas apostas
        linhas =+ nomes[i] + " - " + peso[i] + "gr \n"       
    }   

//exibe as linhas (altera o conteúdo do elemento respLista)
    respLista.innerText = linhas
}

//chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {
//se não há apostas armazenadas em localStorage
    if(!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas")
        return      //retorna (não executas os comandos abaixo)
    }

//solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))    

//se não informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }

//obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melancianome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")
    

})