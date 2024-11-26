// c) Elaborar um programa que simule saques em um caixa eletrônico de um banco. Ler o valor solicitado por clientes até ser digitado 0. Sabendo que o caixa dispõe apenas de notas de 10, exiba após cada leitura se o saque é válido ou inválido. Ao final, listar os saques válidos e a soma dos saques. Exiba também o número de saques inválidos.

const prompt = require("prompt-sync")()
console.log("Informe o valor dos saques ou 0 para sair")
const saques = []                                                 //declara vetor
do {
    const valor = Number(prompt("Saque R$: "))                   //lê valor
    if (valor == 0) {
        break                                                   //sai da repetição
    }
    saques.push(valor)                                            //adiciona ao vetor saques
    if (valor % 10 == 0) {
        console.log("Saque Realizado com Sucesso")
    } else {
        console.log("ERRO... Valor inválido (deve ser múltiplo de 10)")
    }
} while (true)