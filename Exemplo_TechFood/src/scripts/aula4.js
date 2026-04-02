class Prato{
    constructor(nome, preco){
        this.nome = nome,
        this.preco = preco
    }
    exibirComoMoeda(total){
        return "R$" + total.toFixed(2)
    }
}

const lasanha = new Prato("Lasanha a Bolonhesa", 45.00 )

// alert("Seja bem vindo ao sabor e saber")

console.log("Teste")

const cliente = prompt("Bem vindo. Para um atendimento personalizado digite seu nome:")

let nomeFormatado = cliente.trim().toUpperCase()

alert(`Bem vindo ${nomeFormatado}`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 12){
    alert(`Bom dia, ${nomeFormatado}, aproveite as delícias do café da manhã!`)
    console.log("Antes das 12")
}else if(hora < 16){
    alert(`Boa tarde ${nomeFormatado}, aproveite as iguarias do almoço!`)
    console.log("Antes das 16")
}else if(hora < 18){
    alert(`Boa tarde ${nomeFormatado}, aproveite as delícias do café da tarde!`)
    console.log("Antes das 18")
}else if(hora < 0){
    alert(`Boa noite ${nomeFormatado}, aproveite as iguarias do jantar`)
    console.log("Antes das 0")
}


const querPrato = confirm(`E aí meu REI ${nomeFormatado}, deseja realizar um pedido?`)

if(querPrato){
    let quantidade = prompt("Hoje temos Lasanha a Bolonhesa, quantas você quer?")
    let total = lasanha.preco * quantidade
    alert(`Você fez o pedido de ${quantidade} ${lasanha.nome}. O total do seu pedido é de: ${lasanha.exibirComoMoeda(total)}`)
}else{
    alert("Ok, obrigado pela visita, volte sempre!")
}