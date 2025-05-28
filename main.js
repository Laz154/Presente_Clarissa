
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

function musicaPlayer(){
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');

    // Tocar automaticamente
    audio.play();

    function updatePlayButton() {
    if (audio.paused) {
      playPauseBtn.textContent = '▶';
    } else {
      playPauseBtn.textContent = '⏸';
    }
  }

    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶';
      } else {
        audio.play();
        playPauseBtn.textContent = '⏸';
      }
      updatePlayButton();
    });

    audio.addEventListener('play', updatePlayButton);
    audio.addEventListener('pause', updatePlayButton);

    // Atualizar barra de progresso
    audio.addEventListener('timeupdate', () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = progress + '%';
    });
}
    