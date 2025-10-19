const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quand un bloc compétence entre dans la vue, on ajoute la classe "visible"
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // On l'observe plus après
    }
  });
}, { threshold: 0.2 }); // 0.2 = 20% visible pour déclencher

// On applique l'observation à chaque bloc compétence
document.querySelectorAll('.skill-block').forEach(block => {
  observer.observe(block);
});


// ----- CACHER LE HEADER EN SCROLL VERS LE BAS -----
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Si on descend → cacher le header
    header.classList.add('hide-header');
  } else {
    // Si on remonte → montrer le header
    header.classList.remove('hide-header');
  }

  // Met à jour la position de scroll
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});


// ----- MENU BURGER POUR LE TÉLÉPHONE -----
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav.nav-links');

// Quand on clique sur le hamburger, on affiche ou cache le menu
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active'); // ajoute ou enlève la classe "active"
});

