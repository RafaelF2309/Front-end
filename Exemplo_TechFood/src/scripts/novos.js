const tituloNhoque = document.querySelector('#card-nhoque')

const botoesCompra = document.querySelector('.btn-pedido')

const quartoCard = document.querySelector('.card:nth-child(3)')

console.log("1. Mostrando o titulo NHOQUE (Pelo ID)", tituloNhoque)

console.log("2. Quantidade de botões de pedido:", botoesCompra)

console.log("2. Quantidade de botões de pedido:", botoesCompra.length)

console.log("3. O terceiro .card de uma class", terceiroCard)

const data = new Date()
const hora = Date.getHours()

const saudacao = document.querySelector('#boas-vindas')

saudacao.textContent = hora < 18 ? "Bem vindo, boa tarde" :
"Bem vindo, boa noite"