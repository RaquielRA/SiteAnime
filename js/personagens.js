// Expandir cards
const expandButtons = document.querySelectorAll('.expandButton');
let overlay; // Variável para o elemento de sobreposição

expandButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = this.closest('.cardum, .carddois, .cardtres');

        // Alterna a classe "expanded" no card
        card.classList.toggle('expanded');

        if (card.classList.contains('expanded')) {
            // Cria a sobreposição se ainda não existir
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
                overlay.style.backgroundColor = 'rgba(111, 111, 111, 0.621';
                overlay.style.backdropFilter = 'blur(10px)';
                overlay.style.zIndex = '999'; // Fica abaixo do card expandido
                document.body.appendChild(overlay);

                // Adiciona evento para desfazer a expansão ao clicar na sobreposição
                overlay.addEventListener('click', function () {
                    card.classList.remove('expanded');
                    document.body.removeChild(overlay);
                    overlay = null;
                    resetExpandButton(button);
                });
            }
        } else {
            // Remove a sobreposição se o card for retraído
            if (overlay) {
                document.body.removeChild(overlay);
                overlay = null;
            }
        }

        // Altera o ícone e estilo do botão expandir
        const img = this.querySelector('img');
        if (card.classList.contains('expanded')) {
            img.src = 'img/Diminuiricon.png';
            this.style.backgroundColor = '#ff161f';
        } else {
            img.src = 'img/Expandiricon.png';
            this.style.backgroundColor = '';
        }
    });
});

function resetExpandButton(button) {
    const img = button.querySelector('img');
    img.src = 'img/Expandiricon.png';
    button.style.backgroundColor = '';
}