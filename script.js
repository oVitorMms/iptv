const perguntasFAQ = document.querySelectorAll(".faqBotao");

perguntasFAQ.forEach((botao) => {
    botao.addEventListener("click", () => {
        const respostaId = botao.getAttribute("aria-controls");
        const resposta = document.getElementById(respostaId);

        const estavaAberta =
            botao.getAttribute("aria-expanded") === "true";

        // Fecha todas as respostas
        perguntasFAQ.forEach((outroBotao) => {
            const outroId = outroBotao.getAttribute("aria-controls");
            const outraResposta = document.getElementById(outroId);

            outroBotao.setAttribute("aria-expanded", "false");
            outraResposta.classList.remove("aberta");
        });

        // Abre a resposta clicada, se estava fechada
        if (!estavaAberta) {
            botao.setAttribute("aria-expanded", "true");
            resposta.classList.add("aberta");
        }
    });
});
function direcionar(text){
    window.open(`https://wa.me/5545991016653?${text}`)
}