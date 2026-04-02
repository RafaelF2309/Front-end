// EXERCÍCIO - 1

// const nome = prompt("Digite seu nome:")
// const sobrenome = prompt("Agora digite seu sobrenome:")

// let nomeInteiro = nome.concat(" ", sobrenome).trim()

// alert(nomeInteiro.toLowerCase())

// alert(`O nome possui ${nomeInteiro.length} caracteres`)



// EXERCÍCIO - 2

// const conta = prompt("Digite o valor final da conta:")
// const quantidade = prompt("Digite a quantidade de pessoa na mesa:")

// let total_pessoa = conta / quantidade

// alert(`Cada amigo deve pagar ${total_pessoa.toFixed(2)}`)



// EXERCÍCIO - 3

// const valor = prompt("Digite o valor da compra:")
// const cupom = confirm("Você possui cúpom ?")

// if(valor >= 150 || cupom == true){
//     alert("Frete grátis liberado")
// }else{
//     alert("Frete pago")
// }



// EXERCÍCIO - 4

// const num = prompt("Digite um número de 1 a 10")
// const sorteado = Math.floor(Math.random() * 10) + 1
// console.log(sorteado)

// if(num == sorteado){
//     alert("Parabéns o seu número foi sorteado!!!")
// }



// EXERCÍCIO - 5

class Veiculo{
    constructor(modelo, marca, ano){
        this.modelo = modelo,
        this.marca = marca,
        this.ano = ano
    }
    idadeVeiculo(){
        let idade = anoAgora - ano
        return idade
    }
}

const anoAgora = prompt("Digite o ano atual:")
const carro = prompt("Digite o nome do seu carro:")
const marcaCar = prompt("Digite  a marca do seu carro:")
const anoCar = prompt("Digite o ano de fabricação de seu carro:")

let car1 = new Veiculo(carro, marcaCar, anoCar)

alert(car1.idadeVeiculo())