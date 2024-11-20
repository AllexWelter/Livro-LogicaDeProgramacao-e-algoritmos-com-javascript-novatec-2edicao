//Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela, considerando essa situação.


const prompt = require("prompt-sync")                              //adiciona pacote prompt-sync
const valor = Number(prompt("Valor R$: ")                         //lê valor do carnê