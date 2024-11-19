//Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha.

const prompt = require("prompt-sync")()                           //adiciona pacote prompt-sync
const produto = prompt("Produto: ")                              //Lê nome do produto e...
const num = Number(prompt("Nº de Etiquetas: "))                 //quantidade de etiquetas
//cria um laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
for(let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) {                               //se quantidade solicitada de etiquetas for ímpar...
    console.log(produto)
}