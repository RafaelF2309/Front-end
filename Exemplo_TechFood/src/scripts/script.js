/*1 - Saudação conforme a hora */
const horaAgora = new Date()
const hora = horaAgora.getHours

const saudacao = document.querySelector('#saudacao-cinema')

if(hora < 12 && hora > 0){
    saudacao.textContent = 'Bom dia! Bem vindo a sessão matinê'
}
if(hora < 18 && hora > 12){
    saudacao.textContent = "Boa tarde! Sessão da tarde liberada"
}
else{
    saudacao.textContent = "Boa noite! Prepare-se para a sessão coruja"
}




/*2 - Interação de movimento do mouse */
const vip = document.querySelector('#banner-vip')
vip.addEventListener('mouseover', () => {
    vip.classList.add("modo-vip")
})

vip.addEventListener('mouseout', () => {
    vip.classList.remove("modo-vip")
})




/*3 - Calculo em tempo real */
const total_pagar = document.querySelector('#total-pagar')
const btnIng = document.querySelector('#qtd-ingressos')

btnIng.addEventListener("input", () => {
    total = btnIng.value * 35
    total_pagar.textContent = total
})




/*4 - Injeção de conteudo */
const publicarFilme = document.querySelector('#btn-publicar')
const filme = document.querySelector('#nome-filme')
const mural = document.querySelector('#mural-criticas')
publicarFilme.addEventListener("click", () => {
    mural.innerHTML = <article class="card-critica"><h3>🎬${filme}⭐</h3></article>
})




/*5 - Apagar conteudo */
const apagar = document.querySelector('#btn-apagar')
apagar.addEventListener("click", () => {
    mural.innerHTML = ""
})