const nomeUsuario = document.querySelector("#nome-usuario")
nomeUsuario.textContent = "Rafael Ferreira da Silva"

const avatar = document.querySelector("#foto-perfil")
avatar.src=''

const corContainer = document.querySelector("#container-perfil")
corContainer.style.backgroundColor = "#b5b6b7"

const status = document.querySelector("#badge-status")
status.classList.add("Online")
status.textContent = "Status: Ativo"

const skills = document.querySelectorAll(".skill")
console.log("Total de skills:", skills.length)