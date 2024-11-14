const prompt = require("prompt-sync")() //adiciona o pacote ao programa
const nome = prompt("Digite o nome do funcionário: ") //lê os dados de entrada
const salario = Number(prompt("Salário R$: "))
const tempodeEmpresa = Number(prompt("Tempo de empresa (anos): "))
const quadrienios = Math.floor(tempodeEmpresa / 4)            //calcula quadriênios
const acrescimo = salario * quadrienios / 100     //e acréscimo
const anosDias = tempodeEmpresa * 365             //tempo trabalhado em dias



console.log(`Funcionário ${nome} trabalha na empresa a ${tempodeEmpresa} anos.`)
console.log(`Que equivale a um total de ${anosDias} dias.`)
console.log(`Está na empresa a ${quadrienios} quadriênio(s).`)
console.log(`E que com o tempo de ${tempodeEmpresa} anos, viu seu salário sair de R$${salario.toFixed(2)} para R$${(salario+acrescimo).toFixed(2)}`)