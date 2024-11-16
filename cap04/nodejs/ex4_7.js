//A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem o direito de levar um peixe. Peixes extras custam R$12,00.Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar. 


const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync
const pessoas = Number(prompt("Número de pessoas:"))
const peixes = Number(prompt("Número de peixes: "))
let pagar                 //declara a variável pagar

if (peixes <= pessoas) {   //condição definia no exemplo
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)   //exibe p valor a ser pago