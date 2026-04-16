const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
  saudacao.textContent =
    hora < 12
      ? "Bom dia! Qual o seu pedido?"
      : "Boa tarde! Confira nosso cardápio.";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

const main = document.querySelector("main");

main.addEventListener("click", (event) => {
  const clicado = event.target;

  if (clicado.classList.contains("btn-menos")) {
    const box = clicado.parentElement;
    const spanQtd = box.querySelector(".qtd-valor");
    const valorAtual = Number(spanQtd.textContent);
    spanQtd.textContent = Math.max(1, valorAtual - 1);
    atualizarPrecoCard(box);
    return;
  }

  if (clicado.classList.contains("btn-mais")) {
    const box = clicado.parentElement;
    const spanQtd = box.querySelector(".qtd-valor");
    spanQtd.textContent = Number(spanQtd.textContent) + 1;
    atualizarPrecoCard(box);
    return;
  }



  if (clicado.classList.contains("btn-pedido")) {
    event.preventDefault();

    const card = clicado.parentElement;
    const nomePrato = card.querySelector("h3").textContent;
    const quantidade = card.querySelector(".qtd-valor").textContent;
    const precoExibido = card.querySelector(".preco").textContent;

    clicado.textContent = "✔️ Adicionado";
    clicado.style.backgroudColor = "#21dc27";
    clicado.disabled = true;

    setTimeout(() => {
      clicado.textContent = "Pedir Agora";
      clicado.style.backgroudColor = "";
      clicado.disabled = false;
    }, 1500);


    if(!card.querySelector(".badge-adicionado")){
        card.isertAdjacentHTML("beforeend", "<span class='badge-adicionado'>✔️ no resumo</span>")
    }

    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)
  }
});

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",")
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

function adicionarItemAoResumo(nome, qtd, preco, cardorigem){
    const secaoResumo = document.querySelector("#secao-resumo")
    const listaResumo = document.querySelector("#lista-resumo")

    if(!secaoResumo || listaResumo) return

    secaoResumo.style.display = "block"

    const itemLi = document.createElement("li")
    itemLi.classList.add("item-resumo")

    
}