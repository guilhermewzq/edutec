document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
  
    menuToggle.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('open');
    });
  });