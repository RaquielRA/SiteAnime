window.onload = function() {
    // Adiciona a classe 'selected' ao botão Características ao carregar a página
    document.querySelector('.navdet .carButton').classList.add('selected');
}

function mostrarSeção(seçãoId) {
    // Oculta todas as seções
    document.getElementById("caracteristicas").style.display = "none";
    document.getElementById("poderes").style.display = "none";
    document.getElementById("historia").style.display = "none";
    document.getElementById("transformacoes").style.display = "none";

    // Exibe a seção selecionada
    document.getElementById(seçãoId).style.display = "block";

    // Controla a opacidade dos botões na navegação
    const botoes = document.querySelectorAll('.navdet button'); // Seleciona todos os botões dentro de .navdet
    botoes.forEach(botao => {
        if (botao.getAttribute('onclick').includes(seçãoId)) {
            // Se o botão for o que foi clicado, deixa opacidade 100%
            botao.classList.add('selected');
        } else {
            // Senão, deixa opacidade 30%
            botao.classList.remove('selected');
        }
    });
}

function fecharDetalhes() {
    // Redireciona para o index.html, para a seção 'personagens'
    window.location.href = "../index.html#personagens";
}
