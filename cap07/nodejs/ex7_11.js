/*
c) Elaborar um programa que solicite um número de parcelas que devem ser geradas e calcule a data de cada uma dessas parcelas, uma para cada mês, a partir do mês seguinte atual, mantendo o dia atual
*/

const prompt = require("prompt-sync")()                    //pacote para entrada de dados
const parcelas =  Number(prompt("Quantas Parcelas? "))
const data = new Date()                                  //data atual

for (let i = 1; i <= parcelas; i++) {
    data.setMonth(data.getMonth() + 1)                   //aumenta um mês na data

    const dia = data.getDate()
    const mes = data.getMonth() + 1                      // mês varia de 0 a 11, por isso, +1
    const ano = data.getFullYear()

    const diaZero = dia < 10 ? "0" + dia : dia           //acrescenta 0 se dia menor que 10 
    const mesZero = mes < 10 ? "0" + mes : mes           //acrescenta 0 se mês menor que 10
    
    console.log(`${i}º Parcela: ${diaZero}/${mesZero}/${ano}`)

}