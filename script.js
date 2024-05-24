document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
        hamburgerMenu.setAttribute('aria-expanded', String(!expanded));
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
    hamburgerMenu.setAttribute('aria-expanded', String(!expanded));
}

// Function to adjust carousel container size based on header height
function adjustCarouselContainer() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.marginTop = headerHeight + 'px';
}

// Event listener for changes in header size
window.addEventListener('resize', adjustCarouselContainer);
