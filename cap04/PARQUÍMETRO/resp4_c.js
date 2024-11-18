//Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem "Valor insulficiente".
/*
valor         tempo(min)
1,00          30
1,75          60
3,00          120
*/


const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    if (valor < 1.00) {
        alert("Valor insulficiente, insira no mínimo R$1,00")
        frm.inValor.focus()
        return
    }

    let tempo
    let troco
    resp2.innerText = ``
    
    if (valor >= 3) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }

    resp1.innerText = `Tempo: ${tempo} min`
    if (troco > 0) {
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }
    
})