
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
      elementoPergunta.textContent = `Fim do quiz! Você acertou ${contadorAcertos} de ${perguntas.length} perguntas.`;
      elementoOpcoes.innerHTML = "";
      botaoProximo.style.display = "none";
    }
  };
  
  // Inicia o quiz
  mostrarPergunta();