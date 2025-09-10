document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-img');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
  
    menuToggle.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('open');
    });
  });