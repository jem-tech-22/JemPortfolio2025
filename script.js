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

    // Get elements
    const modal = document.getElementById("imageModal");
    const thumbnail = document.getElementById("thumbnail");
    const fullImage = document.getElementById("fullImage");
    const closeBtn = document.getElementsByClassName("close")[0];

    thumbnail.onclick = function() {
    modal.style.display = "block";
    fullImage.src = this.src; // show same image but larger
    }

    // When user clicks the close button
    closeBtn.onclick = function() {
    modal.style.display = "none";
    }

    // Optional: close when user clicks anywhere outside the image
    modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
    }