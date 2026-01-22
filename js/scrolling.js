document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('#fade-item');

function checkPosition() {
  const viewportHeight = window.innerHeight;
  const viewportCenter = viewportHeight / 2;
  const startFadePosition = viewportHeight * 0.75;
  const endFadePosition = viewportCenter;

  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.offsetHeight;

    if (elementTop < startFadePosition && elementTop > -elementHeight) {
      let opacity = 1 - (elementTop - endFadePosition) / (startFadePosition - endFadePosition);
      opacity = Math.max(0, Math.min(1, opacity));
      el.style.opacity = opacity;
    } else if (elementTop >= startFadePosition) {
      el.style.opacity = 0;
    } else if (elementTop <= -elementHeight) {
      el.style.opacity = 1;
    }
  });
}
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
checkPosition();
    
});
