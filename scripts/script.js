var perguntas_alternativas = [ //Variavel onde guarda as perguntas, alternativas e respostas
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
        alternativas:['França', 'Croacia', 'Argentina', 'Marrocos'],
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

var pergunta_exibida = 0 // Contador da quantidade de perguntas exibidas
var pontuacao = 0 // Contador de acertos do usuario

function mostrarPergunta(){ //Função que mostra a pergunta no HTML
    let pergunta = document.querySelector('p#txtpergunta')
    let botao = document.querySelector("div#botoesalt")
    let html = ''
    let np_pontuacao = document.getElementById('np-pontuacao')

    for(let i = 0; i <= 3; i++){
        html += '<button onclick = "verificar('+ i +')">' + perguntas_alternativas[pergunta_exibida].alternativas[i] + '</button>' 
    }

    botao.innerHTML = html
    pergunta.textContent = perguntas_alternativas[pergunta_exibida].pergunta
    np_pontuacao.innerHTML = `<span>Pergunta nº ${pergunta_exibida + 1}</span> <span>Acertos: ${pontuacao}</span>`

}
mostrarPergunta() //Chamada da função que mostra a pergunta no HTML

function verificar(resposta){ //Função que verifica se a alternativa escolhida pelo usuario está correta
    if(resposta == perguntas_alternativas[pergunta_exibida].correta){
        pontuacao++ //Caso a alternativa esteja correta aumenta o contador pontuação, que iniciou em 0
    }

    pergunta_exibida++ /*Aumenta o contador pergunta exibida independetemente se a alternativa escolhida pelo usuario está correta ou não*/

    if(pergunta_exibida < 10){ /*Se a quantidade de perguntas exibidas for menor do que 10, chama a função mostrar pergunta, se não, chama a função mostrar resultado*/
        mostrarPergunta()
    } else{
        mostrarResultado()
    }
}

function mostrarResultado(){ /*Função que mostra o números de acertos do usuario e um comentario de incentivo juntamente, ela também esconde os elementos do quiz */
    let pergunta = document.querySelector('p#txtpergunta')
    let botao = document.querySelector("div#botoesalt")
    let res = document.getElementById('resfinal')
    let np_pontuacao = document.getElementById('np-pontuacao')

    pergunta.style.display = 'none'
    botao.style.display = 'none'
    res.style.display = 'block'
    np_pontuacao.style.display = 'none'
    

    if(pontuacao >= 0 && pontuacao <= 4){
        res.innerHTML = `Seu resultado não foi bom, mas você pode melhorar, você obteve ${pontuacao} acertos` + "<button onclick='reiniciar()'>Jogar novamente</button>"
    } else if(pontuacao >=5 && pontuacao <= 7){
        res.innerHTML = `Muito bem, você obteve ${pontuacao} acertos` + "<button onclick='reiniciar()'>Jogar novamente</button>"
    } else{
        res.innerHTML = `EXPERT! você obteve ${pontuacao} acertos` + "<button onclick='reiniciar()'>Jogar novamente</button>"
    }

}


function reiniciar(){ //Função reiniciar, permite que o usuario jogue novamente o quiz
    let pergunta = document.querySelector('p#txtpergunta')
    let botao = document.querySelector("div#botoesalt")
    let np_pontuacao = document.getElementById('np-pontuacao')
    let res = document.getElementById('resfinal')

    pontuacao = 0
    pergunta_exibida = 0

    pergunta.style.display = 'block'
    botao.style.display = 'block'
    np_pontuacao.style.display = 'flex'
    res.style.display = 'none'
    


    mostrarPergunta()
}
    
