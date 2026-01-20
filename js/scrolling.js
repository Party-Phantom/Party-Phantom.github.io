document.addEventListener('DOMContentLoaded', () => {
    const fadeDiv = document.getElementById('fading');
    const fadeDiv2 = document.getElementById('fading2');

    function checkPosition() {
        const viewportHeight = window.innerHeight;
        const elementTop = fadeDiv.getBoundingClientRect().top;
        const elementHeight = fadeDiv.offsetHeight;
        const viewportCenter = viewportHeight / 2;
        const startFadePosition = viewportHeight * 0.75;
        const endFadePosition = viewportCenter;
        
        if (elementTop < startFadePosition && elementTop > -elementHeight) {
            let opacity = 1 - (elementTop - endFadePosition) / (startFadePosition - endFadePosition);
            opacity = Math.max(0, Math.min(1, opacity));
            
            fadeDiv.style.opacity = opacity;
        } else if (elementTop >= startFadePosition) {
            fadeDiv.style.opacity = 0;
        } else if (elementTop <= -elementHeight) {
            fadeDiv.style.opacity = 1; 
        }
    }
    function checkPosition2() {
        const viewportHeight = window.innerHeight;
        const elementTop = fadeDiv2.getBoundingClientRect().top;
        const elementHeight = fadeDiv2.offsetHeight;
        const viewportCenter = viewportHeight / 2;
        const startFadePosition = viewportHeight * 0.75;
        const endFadePosition = viewportCenter;
        
        if (elementTop < startFadePosition && elementTop > -elementHeight) {
            let opacity = 1 - (elementTop - endFadePosition) / (startFadePosition - endFadePosition);
            opacity = Math.max(0, Math.min(1, opacity));
            
            fadeDiv2.style.opacity = opacity;
        } else if (elementTop >= startFadePosition) {
            fadeDiv2.style.opacity = 0;
        } else if (elementTop <= -elementHeight) {
            fadeDiv2.style.opacity = 1; 
        }
    }
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    window.addEventListener('scroll', checkPosition2);
    window.addEventListener('resize', checkPosition2);
    checkPosition();
    checkPosition2();
});
