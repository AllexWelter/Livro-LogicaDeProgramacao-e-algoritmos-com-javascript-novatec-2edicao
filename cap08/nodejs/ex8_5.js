const prompt = require("prompt-sync")()     //adiciona o pacote ao programa

const vinhos = []      

function titulo(texto) {                   //recebe, por parâmetro, o texto a ser exibido
    console.log()
    console.log(texto)
    console.log("=".repeat(40))

}

//Programa Principal

do{
    titulo('===< Cadastro de Vinhos ===>')
    console.log("1. Inclusão de Vinho")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa de Tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))
}
