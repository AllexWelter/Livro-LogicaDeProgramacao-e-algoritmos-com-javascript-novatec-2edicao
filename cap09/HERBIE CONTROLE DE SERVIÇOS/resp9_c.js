/*c) Elaborar um programa para cadastrar os serviços a serem realizados por um auto center, que organiza a ordem de execução dos serviços. Armazenar os serviços no navegador do usuário e a cada clique no botão EXECUTAR SERVIÇO remover o primeiro serviço e exibi-lo na página. O programa deve atualizar o número de serviços pendentes quando: a) a página for aberta; b) um serviço for incluído; c) um serviço for removido.
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("span")
const resp2 = document.querySelector("h4")


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    

    const servico = frm.inServico.value

    if (localStorage.getItem("herbieServico")) {
        localStorage.setItem("herbieServico", localStorage.getItem("herbieServico") + ";" + servico)
    } else {
        localStorage.setItem("herbieServico", servico)
    }
    
    mostrarPendentes()

    frm.reset()
    frm.inServico.focus()

})

const mostrarPendentes = () => {
    let numPendentes

    if (localStorage.getItem("herbieServico")) {
        numPendentes = localStorage.getItem("herbieServico").split(";").length
    } else {
        numPendentes = 0
    }
    resp1.innerText = numPendentes
}