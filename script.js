const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the document click from immediately closing it
        navMenu.classList.toggle('active');
    });

    // Keep menu open when clicking inside it
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking anywhere else on the document
    document.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu on scroll (with throttle)
    let scrollThrottle = false;
    window.addEventListener('scroll', () => {
        if (!navMenu.classList.contains('active')) return;
        if (scrollThrottle) return;
        scrollThrottle = true;
        navMenu.classList.remove('active');
        setTimeout(() => { scrollThrottle = false; }, 150);
    }, { passive: true });
}