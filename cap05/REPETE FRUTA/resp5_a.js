//Elaborar um programa que leia o nome de uma fruta e um número. O Programa deve repetir a exibição do nome da fruta, de acordo com o número informado. Utilize "*" para separar os nomes.

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    const fruta = (frm.inFruta.value)
    let estrelas = ""
    for(let i = 1; i <= num; i++) {
        if(i > 1) {
            estrelas = estrelas + " * "
        }
        estrelas = estrelas + fruta      
    }
    resp.innerText = estrelas 
})