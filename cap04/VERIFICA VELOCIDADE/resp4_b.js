//Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exibe "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave".

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velPermitida = Number(frm.inPermitida.value)
    const velCondutor = Number(frm.inCondutor.value)
    let resposta = " "
    if (velCondutor <= velPermitida) {
        resposta = "Sem Multa"
    } else if (velCondutor <= velPermitida * 1.2) {
        resposta = "Multa Leve"
    } else {
        resposta = "Multa Grave"
    }
    
    resp.innerText = `Situação: ${resposta}`
})



/*
const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form

  // obtém e converte conteúdo dos campos de Velocidade
  const velPermitida = Number(frm.inPermitida.value)
  const velCondutor = Number(frm.inCondutor.value)

  // cria as condições para verificar situação do condutor
  if (velCondutor <= velPermitida) {
    resp.innerText = "Situação: Sem Multa"
  } else {
    const maisVinte = velPermitida * 1.2
    if (velCondutor <= maisVinte) {
      resp.innerText = "Situação: Multa Leve"
    } else {
      resp.innerText = "Situação: Multa Grave"
    }
  }
})
*/



