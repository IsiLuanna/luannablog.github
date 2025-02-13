const perguntas = [
    {
        pergunta: "Qual é o nome completo da dona do blog?",
        opcoes: ["Isi Luanna Silva", "Isi Luanna do Nascimento Passos", "Isi Luanna Passos", "Isi Luanna Nascimento"],
        resposta: 1
    },
    {
        pergunta: "Qual anime aparece na página inicial do blog?",
        opcoes: ["Dragon Ball", "Naruto", "One Piece", "Bleach"],
        resposta: 1
    },
    {
        pergunta: "Quantos projetos diferentes existem no portfólio?",
        opcoes: ["5", "6", "7", "8"],
        resposta: 2
    },
    {
        pergunta: "Qual é um dos conversores disponíveis no portfólio?",
        opcoes: ["Conversor de Massa", "Conversor de Velocidade", "Conversor de Volume", "Conversor de Área"],
        resposta: 0
    },
    {
        pergunta: "Qual é a cor principal usada nos botões do site?",
        opcoes: ["Verde (#4CAF50)", "Azul (#4582b0)", "Vermelho (#FF0000)", "Roxo (#800080)"],
        resposta: 1
    }
];
let perguntaAtual = 0;
let pontuacao = 0;
function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('pergunta').textContent = pergunta.pergunta;

    const opcoes = document.getElementsByClassName('option');
    for (let i = 0; i < opcoes.length; i++) {
        opcoes[i].textContent = pergunta.opcoes[i];
        opcoes[i].style.backgroundColor = '#4582b0';
        opcoes[i].disabled = false;
    }

    document.getElementById('resultado').textContent = '';
}