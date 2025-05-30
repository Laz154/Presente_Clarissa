
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

// TEMPORIZADOR DO CARROSSEL

let currentIndex = 0;
const track = document.getElementById("carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 10000);


// CORAÇÕES ANIMADOS 💖

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

window.addEventListener("load", () => {
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 150);
  }
});
    
// MARCAÇÃO DO TEMPO DE NAMORO
setInterval(() => {
  const agora = new Date();
  const dataAlvo = new Date(2024, 9, 7, 0, 0, 0); // 07/09/2024
  let contagem_p = document.getElementById("contagem")

  const diferenca = agora - dataAlvo; //diferença em milissegundos

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  contagem_p.textContent = `${dias} dias, ${horas}h, ${minutos}m e ${segundos}s`;
}, 1000);







