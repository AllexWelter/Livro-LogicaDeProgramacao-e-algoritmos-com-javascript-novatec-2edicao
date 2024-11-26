// b) Elaborar um programa que leia nome e idade de "n" clientes de um banco (até ser digitado "Fim" no nome). Após, classifique e exiba os clientes em 2 grupos: presencial (a partir de 60 anos) e Fila normal (até 59 anos). Informe a ordem de atendimento em cada grupo de acordo com a chegada dos clientes. 

const prompt = require("prompt-sync")()
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair")
const clientes = []                             //declara vetor
do {
    const nome = prompt("Nome:")               //lê o nome
    if (nome == "Fim") {                      //antes de ler a idade, verifica
        break                                //sai da repetição
    }
    const idade = Number(prompt("Idade: "))
    clientes.push({nome, idade})               //adiciona ao vetor de objetos
    console.log("Ok! Cliente inserido na fila...")
} while (true)
console.log("\nFila Preferencial")            // \n no início gera uma nova linha
console.log("-".repeat(40))                  //exibe 40 -
const filaPref = clientes.filter(cliente => cliente.idade >= 60 )
filaPref.forEach((fila, i) =>{
    console.log(`${i + 1}. ${fila.nome}`)
})
console.log("\nFila Normal")
console.log("-".repeat(40))
const filaNormal = clientes.filter(cliente => cliente.idade < 60)
    filaNormal.forEach((fila, i) =>{
        console.log(`${i + 1}. ${fila.nome}`)
    })