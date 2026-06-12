document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnInteragir');
    const mensagemDiv = document.getElementById('mensagem');

    botao.addEventListener('click', () => {
        // Altera o conteúdo da div de mensagem de forma dinâmica
        mensagemDiv.innerHTML = "<strong>Dica de Prática Sustentável:</strong> Utilize a análise de solo regular e adote a adubação verde ou orgânica para reduzir a dependência de insumos sintéticos.";
        
        // Exibe a mensagem removendo a classe 'hidden' caso ela esteja escondida
        mensagemDiv.classList.toggle('hidden');
        
        // Altera o texto do botão dependendo do estado da mensagem
        if (mensagemDiv.classList.contains('hidden')) {
            botao.textContent = "Saber mais sobre Manejo Correto";
        } else {
            botao.textContent = "Ocultar dica";
        }
    });
});
