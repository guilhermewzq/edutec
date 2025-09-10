const perguntas = [
  {
    texto: "Quem foi o cientista responsável pela Teoria de Gaia, que propõe a Terra como um sistema vivo?",
    alternativas: ["Carl Sagan", "James Lovelock", "Stephen Hawking", "Barry J. Gibb"],
    correta: 1
  },
  {
    texto: "Como nascem as moléculas orgânicas no espaço, apesar das condições extremas?",
    alternativas: ["Pela ação direta da gravidade", "Por colisões e reações em grãos de poeira interestelar", "Pela radiação solar direta", "Por congelamento absoluto"],
    correta: 1
  },
  {
    texto: "Qual fenômeno explica a origem dos elementos químicos mais pesados no universo?",
    alternativas: ["Fusão nuclear no interior das estrelas", "Radiação cósmica", "Explosões de buracos negros", "Movimento de asteroides"],
    correta: 0
  },
  {
    texto: "O que foi encontrado na queda do meteorito de Murchison, fortalecendo a hipótese da origem extraterrestre da vida?",
    alternativas: ["Água líquida", "Oxigênio puro", "Mais de 70 aminoácidos", "Pequenos organismos vivos"],
    correta: 2
  },
  {
    texto: "Qual tecnologia moderna está revolucionando a astroquímica ao permitir a detecção de moléculas em exoplanetas?",
    alternativas: ["Satélites meteorológicos", "Inteligência artificial e telescópios espaciais como o James Webb", "Drones interestelares", "Robôs exploradores"],
    correta: 1
  },
  {
    texto: "A descoberta de fosfina na atmosfera de qual planeta gerou polêmica sobre sinais de possível vida?",
    alternativas: ["Marte", "Júpiter", "Vênus", "Saturno"],
    correta: 2
  },
  {
    texto: "Como cometas podem ter contribuído para o surgimento da vida na Terra?",
    alternativas: ["Por colidirem com a Lua", "Trazendo compostos orgânicos como aminoácidos e açúcares", "Alterando a órbita do planeta", "Espalhando oxigênio puro pela atmosfera"],
    correta: 1
  },
  {
    texto: "Qual é a principal dificuldade para naves humanas viajarem além do Sistema Solar?",
    alternativas: ["Falta de combustível", "Distância de cerca de 18 bilhões de km e o desconhecimento da regiao", "A gravidade solar", "Barreiras de radiação impenetráveis"],
    correta: 1
  }
];



// Variáveis do quiz
let numeroPergunta = 0;
let jaRespondeu = false;
let contadorAcertos = 0;

// Elementos do DOM
const elementoPergunta = document.getElementById("question");
const elementoOpcoes = document.getElementById("options");
const botaoProximo = document.getElementById("next-btn");
const elementoContador = document.getElementById("counter");
const barraProgresso = document.getElementById("progress-bar");

// Função para atualizar a barra de progresso
function atualizarProgresso() {
  const progresso = ((numeroPergunta + 1) / perguntas.length) * 100;
  barraProgresso.style.width = `${progresso}%`;
  elementoContador.textContent = `${numeroPergunta + 1}/${perguntas.length}`;
}

// Função para mostrar a pergunta atual
function mostrarPergunta() {
  jaRespondeu = false;
  botaoProximo.style.display = "none";

  const pergunta = perguntas[numeroPergunta];
  elementoPergunta.textContent = `${numeroPergunta + 1}. ${pergunta.texto}`;
  elementoOpcoes.innerHTML = "";

  pergunta.alternativas.forEach((textoAlternativa, indice) => {
    const botao = document.createElement("div");
    botao.classList.add("option");
    botao.innerHTML = `<span>${String.fromCharCode(65 + indice)}</span> ${textoAlternativa}`;
    botao.onclick = () => verificarResposta(indice);
    elementoOpcoes.appendChild(botao);
  });

  atualizarProgresso();
}

// Função para verificar a resposta
function verificarResposta(indiceClicado) {
  if (jaRespondeu) return;
  jaRespondeu = true;

  const respostaCerta = perguntas[numeroPergunta].correta;
  const todosBotoes = document.querySelectorAll(".option");

  if (indiceClicado === respostaCerta) {
    contadorAcertos++;
  }

  todosBotoes.forEach((botao, indice) => {
    if (indice === respostaCerta) {
      botao.classList.add("correct");
    } else {
      botao.classList.add("incorrect");
    }
  });

  botaoProximo.style.display = "flex";
}


// Próxima pergunta
botaoProximo.onclick = () => {
  numeroPergunta++;
  if (numeroPergunta < perguntas.length) {
    mostrarPergunta();
  } else {
    // Mensagem principal
    elementoPergunta.textContent = `Fim do quiz! Você acertou ${contadorAcertos} de ${perguntas.length} perguntas.`;

    // Define medalha e mensagem
    let medalha = "";
    let mensagemMedalha = "";

    if (contadorAcertos >= 0 && contadorAcertos <= 3) {
      medalha = "./imagens/bronze.png";
      mensagemMedalha = "Você ganhou a Medalha de Bronze!";
    } else if (contadorAcertos >= 4 && contadorAcertos <= 6) {
      medalha = "./imagens/prata.png";
      mensagemMedalha = "Você ganhou a Medalha de Prata!";
    } else if (contadorAcertos >= 7 && contadorAcertos <= 8) {
      medalha = "./imagens/ouro.png";
      mensagemMedalha = "Você ganhou a Medalha de Ouro!";
    } 
    // Mostra medalha abaixo da mensagem principal
    const medalhaContainer = document.createElement("div");
    medalhaContainer.classList.add("resultado-medalha");
    medalhaContainer.innerHTML = `
      <p>${mensagemMedalha}</p>
      <img src="${medalha}" alt="Medalha" class="medalha-img">
    `;
    elementoPergunta.insertAdjacentElement("afterend", medalhaContainer);

    // Botões abaixo
    elementoOpcoes.innerHTML = `
        <a href="../HOME/index.html" class="btn-home">Voltar para a Home</a>
        <a href="../QUIZ/index.html" class="btn-home">Tentar Novamente</a>
       
    `;

    // Botão de reiniciar
    document.getElementById("btn-restart").onclick = () => {
      numeroPergunta = 0;
      contadorAcertos = 0;
      document.querySelector(".resultado-medalha").remove(); // remove medalha antiga
      mostrarPergunta();
    };

    botaoProximo.remove();
    barraProgresso.style.width = "100%";
    elementoContador.textContent = `${perguntas.length}/${perguntas.length}`;
  }
};






document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-img');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  menuToggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
  });
});

// Inicia o quiz
mostrarPergunta();
