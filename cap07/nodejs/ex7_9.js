/*
a) Elaborar um programa que leia uma fórmula matemática e enalise se os parênteses na fórmula estão corretos. A análise deve considerar dois fatores: o número de "(" deve ser igual ao número de ")" e, ao ler a fórmula da esquerda para a direita, em nenhum momento, o número de ")" pode ser maior que o número de "(", ou seja, não pode fechar um parêntese sem antes ter aberto.
*/

const prompt = require("prompt-sync")()    //pacote para entrada de dados
const formula = prompt("Fórmula:")         //lê a fórmula
let abre = 0                               //contadores
let fecha  = 0

for (const simbolo of formula) {           //percorre os caracteres da fórmula
    if (simbolo == "(" ) {
        abre++
    } else if (simbolo == ")" ) {
        fecha++
    }
    //se, em algum momento, o número de fecha for maior que abre...
    if(fecha > abre) {
        break             //..sai da repetição
    }

}