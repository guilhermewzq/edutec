
  
  document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelectorAll('.hamburger-menu a');
  
    menuToggle.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('open');
    });
  
   
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('open');
      });
    });
  });

  