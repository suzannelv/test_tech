document.addEventListener('DOMContentLoaded', () => {
// obtenir chaque carte de patients
  let cardEl = document.querySelectorAll('.card-animate');

// parcourir les cartes en ajoutant les animation scrollTrigger
  cardEl.forEach((cardEl) => {
    gsap.to(cardEl, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'ease',
      scrollTrigger: {
        trigger: cardEl,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: true
      }
    });
  });
});
