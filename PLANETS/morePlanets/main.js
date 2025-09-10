document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao-voltar");
  
    botao.addEventListener("click", function () {
      window.location.href = "tabela.html"; // redireciona para tabela.html
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelectorAll('.hamburger-menu a');
  
    menuToggle.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('open');
    });
  
    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('open');
      });
    });
  });
