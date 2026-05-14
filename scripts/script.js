var perguntas_alternativas = [
    {
        pergunta: "Em que ano o futebol foi criado?",
        alternativas:[1865, 1866, 1863, 1864],
        correta: 2
    },

    {
        pergunta: 'Quem é a jogadora de futebol com mais bolas de ouro?',
        alternativas:['Formiga', 'Marta',  'Gabi Zanotti', 'Jhonson'],
        correta: 1
    },

    {
        pergunta:"Quem é o jogador na história da NBA com mais titulos da competição?",
        alternativas:['Bill Russell','Sam Jones', 'Tom Heinsohn', 'Robert Horry'],
        correta: 0
    },

    {
        pergunta:'Qual time da NBA ganhou mais titulos na história?',
        alternativas:['Golden State Warriors', 'Los Angeles Lakers', 'Chicago Bulls', 'Boston Celtics'],
        correta: 3
    },

    {
        pergunta: 'Qual desses jogadores teve passagem por Barcelona e Real Madrid?',
        alternativas:['Ronaldo Fenomeno', 'Ronaldinho', 'Renato Gaucho', 'Romario'],
        correta: 0
    },

    {
        pergunta:'Qual será o confronto da final da champions league 2025/2026?',
        alternativas:['PSG x Bayern', 'PSG x Arsenal', 'Arsenal x Bayern', 'Bayern x Atletico de Madrid'],
        correta: 1
    },

    {
        pergunta:'Qual seleção foi campeã da copa do mundo de 2022?',
        alternativas:['França', 'Croacia', 'Argetina', 'Marrocos'],
        correta: 2
    },

    {
        pergunta: 'Quantos titulos o Brasil tem em copas do mundo?',
        alternativas:[4, 8, 3, 5],
        correta: 3
    },

    {
        pergunta:'Qual é o unico jogador a disputar 3 finais de copa do mundo consecutivas?',
        alternativas:['Neymar', 'Pelé', 'Cafu', 'Roberto Carlos'],
        correta: 2
    },

    {
        pergunta:'Em que ano o Sport Club Corinthians Paulista foi fundado:',
        alternativas:[1910, 1911, 1912, 1913],
        correta: 0
    }
]

var pergunta_exibida = 0
var pontuacao = 0

function mostrarPergunta(){
    let pergunta = document.querySelector('p#txtpergunta')
    let botao = document.querySelector("div#botoesalt")
    let html = ''

    for(let i = 0; i <= 3; i++){
        html += '<button onclick = "verificar ('+ i +')">' + perguntas_alternativas[pergunta_exibida].alternativas[i] + '</button>' 
    }

    botao.innerHTML = html
    pergunta.textContent = perguntas_alternativas[pergunta_exibida].pergunta

}
mostrarPergunta()

function verificar(resposta){
    if(resposta == perguntas_alternativas[pergunta_exibida].correta){
        pontuacao++
    }

    pergunta_exibida++

    if(pergunta_exibida < 10){
        mostrarPergunta()
    } else{
        mostrarResultado()
    }
}

function mostrarResultado(){
    let pergunta = document.querySelector('p#txtpergunta')
    let botao = document.querySelector("div#botoesalt")
    let res = document.getElementById('resfinal')

    pergunta.style.display = 'none'
    botao.style.display = 'none'
    res.style.display = 'block'

    if(pontuacao >= 0 && pontuacao <= 4){
        res.innerHTML = 'Seu resultado não foi bom, mas você pode melhorar!!!'
    } else if(pontuacao >=5 && pontuacao <= 7){
        res.innerHTML = 'Muito bem, parabéns!'
    } else{
        res.innerHTML = 'EXPERT!!!!!'
    }

}
    
