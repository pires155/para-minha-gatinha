function abrirEnvelope() {
  document.getElementById('envelope').classList.toggle('aberto');
}

criarCoracoes(); // Chama os corações assim que a página abre


// Função para criar os corações caindo
function criarCoracoes() {
  const container = document.querySelector('.coracoes-container');

  setInterval(() => {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');

    // Aleatoriza a posição, duração e tamanho
    coracao.style.left = `${Math.random() * 100}vw`;
    coracao.style.animationDuration = `${Math.random() * 3 + 3}s`;
    coracao.style.width = coracao.style.height = `${Math.random() * 20 + 20}px`;

    container.appendChild(coracao);

    // Remove o coração depois de um tempo pra não pesar
    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }, 300); // Cria um novo a cada 0.3s
}
