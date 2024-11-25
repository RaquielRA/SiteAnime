const buttons = document.querySelectorAll(".open-popup");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video");
    const container = this.parentElement; // Contêiner da imagem e botão

    // Cria o iframe para o vídeo
    const iframe = document.createElement("iframe");
    iframe.src = `${videoUrl}?autoplay=1`;
    iframe.allow = "autoplay";
    iframe.frameBorder = "0";
    iframe.style.width = "100%"; // Ajusta para 100% da largura do container
    iframe.style.height = "100%"; // Ajusta para 100% da altura do container
    iframe.style.maxWidth = "560px"; 
    iframe.style.maxHeigth = "315px";// Limita a largura máxima

    // Remove a imagem e o botão temporariamente
    container.querySelector(".thumbnail").style.display = "none";
    this.style.display = "none";

    // Adiciona o iframe no container
    container.appendChild(iframe);

    // Adiciona um botão para fechar o popup
    const closeButton = document.createElement("button");
    closeButton.textContent = "✖";
    closeButton.classList.add("close-popup");
    container.appendChild(closeButton);

    // Fecha o popup ao clicar no botão
    closeButton.addEventListener("click", () => {
      iframe.remove();
      closeButton.remove();
      container.querySelector(".thumbnail").style.display = "block";
      this.style.display = "block";
    });

    // Chama a função para ajustar o iframe com base na largura da tela
    adjustIframeSize(iframe);
  });
});

// Função para ajustar o iframe com base na largura da tela
function adjustIframeSize(iframe) {
  // Verifique a largura da tela
  const screenWidth = window.innerWidth;

  if (screenWidth <= 650) {
    iframe.style.width = '344px';
    iframe.style.height = '193px';
    // Definido para 344px para telas pequenas
  } else {
    iframe.style.width = '100%'; // O iframe ocupará 100% da largura disponível
    iframe.style.maxWidth = '560px';
    iframe.style.maxHeigth = '315px'; // Limita o tamanho máximo do iframe
  }
}

// Executa a função sempre que a janela for redimensionada
window.onresize = () => {
  // Ajusta o iframe de todos os vídeos abertos
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach(iframe => adjustIframeSize(iframe));
};
