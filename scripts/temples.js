// WDD 131 - Picture Album
// Dynamic footer info
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle for mobile view
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        menuButton.innerHTML = '&#10005;'; // X symbol
    } else {
        menuButton.innerHTML = '&#9776;'; // Hamburger symbol
    }
});
