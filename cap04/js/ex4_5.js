//Elaborar um programa que leia um número e calcule sua raiz Quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: Não há raiz Quadrada para...

//obtém elementos da página 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()       //evita envio do form
    const numero = Number(frm.inNumero.value) //obtém número digitado no form
    const raiz = Math.sqrt(numero)   //calcula raiza quadrada do número
    if(Number.isInteger(raiz)) {    //se valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}` //mostra a raiz    
    } else {                             //senão,
        resp.innerText = `Não há raiz exata para ${numero}`   //... mostra a mensagem
    }
})