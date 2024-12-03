/*
b) Elaborar um programa que leia a altura de uma árvore (número de linhas) e após exiba a árvore iniciando com 2 estrela (asteriscos) e aumentando em 2 a cada linha. Fazer com que a árvores tenha uma margem esquerda fixa de 30 espaços e fique centralizada.
*/

const prompt = require("prompt-sync")()    //pacote para entrada de dados

const altura = Number(prompt("Altura da árvore: "))    //lê o número de linhas (altura)
console.log()                                          //deixa uma linha em branco
for(let i = 1; i <= altura; i++) {                     //inicia repetição
    const espacos = 30 + (altura - i)                  //calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(i*2)) //exibe cada linha
}
