/*
c) Elaborar um programa que solicite um número de parcelas que devem ser geradas e calcule a data de cada uma dessas parcelas, uma para cada mês, a partir do mês seguinte atual, mantendo o dia atual
*/

const prompt = require("prompt-sync")                    //pacote para entrada de dados
const parcelas =  Number(prompt("Quantas Parcelas? "))
const data = New Date()                                  //data atual