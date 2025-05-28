function redirecionarPagina() {
    window.location.href = "index.html"; // Substitua pela URL desejada
}

// Associa o clique do botão à função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("buntton_start");
    if (botao) {
        botao.addEventListener("click", redirecionarPagina);
    }
});

    