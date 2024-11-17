//Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exibe "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave".


const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velPermitida = Number(frm.inPermitida.value)
    const velCondutor = Number(frm.inCondutor.value)
    
})