document.addEventListener('DOMContentLoaded', () => {
    const rocketTrigger = document.getElementById('rocket-trigger');
    const rocket = document.getElementById('rocket');
    const section2 = document.querySelector('.section-2');
  
    function resetRocket() {
      // Réinitialisation des styles après que le fondu soit terminé
      setTimeout(() => {
        rocket.style.display = 'none'; // Cacher la fusée
        rocket.style.bottom = '';
        rocket.style.opacity = '';
        rocket.style.transition = '';
      }, 1000); // Délai pour permettre au fondu de se terminer
    }
  
    rocketTrigger.addEventListener('click', (e) => {
      e.preventDefault(); // Empêcher le comportement par défaut de navigation
  
      rocket.style.display = 'block'; // Assurez-vous que la fusée est visible
      rocket.style.opacity = '1';
      rocket.style.transition = 'bottom 3s ease-in-out, opacity 2.5s ease-in-out';
  
      // Calculer la position finale de la fusée
      const finalPosition = window.innerHeight - section2.offsetTop + window.scrollY - 350;
      rocket.style.bottom = `${finalPosition}px`;
  
      // Commencer le fondu de sortie de la fusée
      setTimeout(() => {
        rocket.style.opacity = '0';
      }, 300); // Démarrer le fondu après 1.5 secondes
  
      // Attendre la fin de l'animation de la fusée pour faire défiler la page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        resetRocket(); // Réinitialiser la fusée pour le prochain clic
      }, 1800); // Temps total pour l'animation de la fusée
    });
  });
  