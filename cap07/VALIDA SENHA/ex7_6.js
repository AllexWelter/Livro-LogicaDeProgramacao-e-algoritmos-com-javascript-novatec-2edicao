const frm = document.querySelector("form")    //obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()                       //evita envio do form
    const senha = frm.inSenha.value          //obtém senha informada pelo usuário
    const erros = []                         //vetor com erros

    //verificar se o tamanho da senha é inválido
    if(senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    //verifica se não possui números
    if(senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo, 1)")
    }

    //verifica se não possui letras minúsculas
    if(senha.match(/[a-z]/g) == null) {
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }

    //verificar se não possui letras maiúsculas ou se possui apenas 1   
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir letras maiúsculas, (no mínimo, 2)")
    }

    //verifica se não possui símbolos ou "_"
    if(!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    //se vetor está vazio (significa que não foram encontrado erros)
    if(erros.length == 0) {
        resp.innerText = "Ok! Senha Válida."
    } else {
        resp.innerText = `Erro... a senha deve ${erros.join(", ")}`
    }

})