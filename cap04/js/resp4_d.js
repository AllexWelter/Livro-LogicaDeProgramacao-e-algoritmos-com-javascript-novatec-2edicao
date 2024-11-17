/*Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros 2. Caso possam formar um triângulo, exiba também qual o tipo do triângulo:
Equilátero -> 3 lados iguais
Isósceles -> 2 lados iguais
Escaleno -> 3 lados diferentes
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    let triangulo
    if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
        triangulo = "Equilátero"
    } else if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        triangulo = "Escaleno"
    } else {
        triangulo = "Isósceles"
    }
    
    let lado
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        lado = "Podem formar um triângulo"
        resp1.innerText = `Lados: ${lado}`
        resp2.innerText = `Tipo: ${triangulo}`
    } else {
        lado = "Os lados não podem formar um triângulo"
        resp1.innerText = `Lados: ${lado}` 
    }
/*
    resp1.innerText = `Lados: ${lado}` 
    resp2.innerText = `Tipo: ${triangulo}`
*/
})


