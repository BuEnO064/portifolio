// Exemplo de interação: Alerta ao clicar no botão "Ver Projeto"
document.querySelector(".btn-ver-projeto").addEventListener("click", function() {
    alert("Em breve mais detalhes sobre este projeto! 🚀");
});

// Exemplo: Mudar cor do título ao passar o mouse
const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function() {
    titulo.style.color = "#B0E0E6"; // azul claro
});

titulo.addEventListener("mouseout", function() {
    titulo.style.color = "white"; // Volta ao branco
});