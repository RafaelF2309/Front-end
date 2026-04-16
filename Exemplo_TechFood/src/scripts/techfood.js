const horaAgora = new Date()

const hora = horaAgora.getHours()

const saudacao = document.querySelector("#boas-vindas")

if(hora >= 0 && hora < 12){
    saudacao.textContent = 'Bom dia. Qual será o pedido de hoje?'
}
else if(hora > 12 && hora < 18){
    saudacao.textContent = 'Boa tarde. Qual será o pedido de hoje?'
}
else{
    saudacao.textContent = 'Boa noite. Qual será o pedido de hoje?'
}



