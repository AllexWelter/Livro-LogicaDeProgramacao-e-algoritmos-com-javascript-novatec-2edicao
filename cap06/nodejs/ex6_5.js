// a) Elaborar um programa que leia a nota de "n" alunos até o usuário digitar "Fim" no nome. Após, verifique e exiba a maior nota da turma. Se a maior nota for superior ou igual a 7, exiba os alunos que a obtiveram. Caso contrário, exiba a mensagem "Não há alunos em destque na turma".


const prompt = require("prompt-sync")()

console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")
const alunos = []                                                          //declara vetor
do {
    const nome = prompt("Nome: ")                                        //lê o nome
    if(nome == "Fim") {                                                 //antes de ler a nota, verifica
        break                                                          //sai da repetição
    }
const nota = Number(prompt("Nota: "))                                //lê a nota
alunos.push({nome, nota})                                           //adiciona dados ao vetor de objetos
console.log("Ok! Aluno(a) cadastrado(a)...")
} while (true)
console.log("-".repeat(40))                                            //exibe 40 -
const maior = alunos.reduce((a, b) => Math.max(nota, b.nota), 0)      //obtém maior nota





