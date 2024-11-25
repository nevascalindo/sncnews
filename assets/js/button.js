// Pega o botão
var topBtn = document.getElementById("topBtn");

// Quando o usuário rolar 20px para baixo a partir do topo da página, o botão aparecerá
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block"; // Mostra o botão
    } else {
        topBtn.style.display = "none"; // Esconde o botão
    }
}

// Quando o usuário clicar no botão, a página volta ao topo
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}