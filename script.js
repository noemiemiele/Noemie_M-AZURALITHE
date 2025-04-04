// Sélectionne l'élément burger et le menu
const burger = document.getElementById('burger');
const menu = document.querySelector('nav .menu');

// Ajoute un événement au clic sur l'icône burger
burger.addEventListener('click', () => {
    // Ajoute ou enlève la classe 'active' pour afficher/masquer le menu
    menu.classList.toggle('active');
});
