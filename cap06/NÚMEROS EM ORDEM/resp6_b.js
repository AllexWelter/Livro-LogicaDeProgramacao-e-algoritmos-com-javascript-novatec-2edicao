// b) Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão verificar ordem, o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente.

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outLista")
const resp2 = document.querySelector("#outOrdem")
const numeros = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    numeros.push(num)
    
    resp1.innerText = "Números: " + numeros.join(", ")
    resp2.innerHTML = ""
    
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.inVerificar.addEventListener("click", () =>{
    if(numeros.length == 0 ) {
        alert("Não há números na lista...")
        inNumero.focus()
        return
    }   
    let ordem = true

    for(let i = 0; i < numeros.length - 1; i++) {
        if(numeros[i] > numeros[i + 1]) {
            ordem = false
            break
        }
    }
    resp2.innerText = ordem ? "Ok, Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente" 
})