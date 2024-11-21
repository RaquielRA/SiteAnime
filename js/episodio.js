const buttons = document.querySelectorAll(".open-popup");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video");
    const container = this.parentElement; // Contêiner da imagem e botão

    // Cria o iframe para o vídeo
    const iframe = document.createElement("iframe");
    iframe.src = `${videoUrl}?autoplay=1`;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.allow = "autoplay";
    iframe.frameBorder = "0";

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
  });
});
