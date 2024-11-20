//Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é igual a soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.
/*
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    let divisores = ""    //armazena os divisores
    let soma = 0

    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            soma += i
            divisores += `${i}, `
        }
    }

    //remove a última vírgula e espaço desncessários
    divisores = divisores.slice(0, -2)

    const ehPerfeito = soma === num

    resp1.innerText = `Divisores do ${num}: ${divisores} (Soma: ${soma})`
    resp2.innerText = `${num} ${ehPerfeito ? "É um Número Perfeito" : "Não É um Número Perfeito"}`
})

*/

/*
slice(start, end):
start (0): Começa a partir do início da string.
end (-2): Vai até dois caracteres antes do final.
*/


 
const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {         // "escuta" evento submit do form
  e.preventDefault() // evita envio do form

  const numero = Number(frm.inNumero.value)

  // como 1 é um divisor universal, já iniciamos com ele
  let divisores = "Divisores do " + numero + ": 1"
  let soma = 1

  // percorre os possíveis divisores e acumula
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ", " + i // vírgula + i (evita última vírgula)
      soma = soma + i
    }
  }
  divisores = divisores + " (Soma: " + soma + ")"

  // altera o conteúdo de outResp1
  resp1.innerText = divisores

  // verifica se é perfeito e exibe resposta na tag outResp2
  if (numero == soma) {
    resp2.innerText = `${numero} É um Número Perfeito`
  } else {
    resp2.innerText = `${numero} Não É um Número Perfeito`
  }
});


