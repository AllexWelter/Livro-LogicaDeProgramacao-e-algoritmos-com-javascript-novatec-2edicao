/* Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o número maximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: 

a) cada parcela deve ser de, no mínimo, R$20,00
b) o número máximo de parcelas parmitidas é 6

*/

const prompt = require("prompt-sync")()  //adiciona pacote prompt-sync
const valor = Number(prompt("Valor da compra R$: ")) //lê valor da compra
const aux = Math.floor(valor / 20)      //aux = número de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux    //operador ternário
const valorParcela = valor / parcelas              //cálculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)






/*
let parcelas
if (aux == 0) {
    parcelas = 1
} else if (aux > 6) {
    parcelas = 6
} else {
    parcelas = aux
}




*/