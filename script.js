function abrirEnvelope() {
    document.getElementById('envelope').classList.toggle('aberto');
  }
  
  function criarCoracao() {
    const coracoesContainer = document.querySelector('.coracoes');
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = 4 + Math.random() * 2 + 's';
    coracoesContainer.appendChild(coracao);
  
    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }
  
  setInterval(criarCoracao, 300);

  
  
  
