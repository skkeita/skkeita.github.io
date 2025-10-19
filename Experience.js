// Sélectionne tous les boutons "Voir plus"
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fullDesc = button.nextElementSibling;

    // Bascule la classe pour afficher/masquer la description
    fullDesc.classList.toggle('hidden');

    // Change le texte du bouton en fonction de l'état
    if (fullDesc.classList.contains('hidden')) {
      button.textContent = 'Voir plus';
    } else {
      button.textContent = 'Refermer';
    }
  });
});
