function abrirEnvelope() {
    document.getElementById('envelope').classList.toggle('aberto');
  }
.coracoes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 999;
}

.coracao {
  position: absolute;
  width: 20px;
  height: 20px;
  background: url('https://cdn-icons-png.flaticon.com/512/833/833472.png') no-repeat center center;
  background-size: contain;
  animation: cair 6s linear infinite;
  opacity: 0.8;
}

@keyframes cair {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

  
