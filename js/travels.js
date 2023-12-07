// Sélectionnez l'élément avec la classe "travels"
const travelsButton = document.querySelector('.travels');

// Sélectionnez l'élément avec l'ID "travels-section"
const travelsSection = document.getElementById('travels-section');

// Sélectionnez les éléments "First Travel" et "Second Travel"
const firstTravel = document.querySelector('.first-travel');
const secondTravel = document.querySelector('.second-travel');

// Sélectionnez le bouton de fermeture
const closeBtn = document.querySelector('.close-btn');

// Ajoutez un gestionnaire d'événement au clic sur l'élément "travels"
travelsButton.addEventListener('click', () => {
  // Affiche la section "travels-section"
  travelsSection.style.display = 'flex';
});

// Ajoutez un gestionnaire d'événement au clic sur le bouton de fermeture
closeBtn.addEventListener('click', () => {
  // Masque la section "travels-section"
  travelsSection.style.display = 'none';
});

// Ajoutez un gestionnaire d'événement pour basculer vers "First Travel"
firstTravel.addEventListener('click', () => {
  firstTravel.style.display = 'flex';
  secondTravel.style.display = 'none';
});

// Ajoutez un gestionnaire d'événement pour basculer vers "Second Travel"
secondTravel.addEventListener('click', () => {
  secondTravel.style.display = 'flex';
  firstTravel.style.display = 'none';
});
