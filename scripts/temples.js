// temples.js — Dynamic footer dates + hamburger menu toggle

// ── Footer: current year ──
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ── Footer: last modified date ──
const lastModEl = document.getElementById('lastModified');
if (lastModEl) {
  lastModEl.textContent = `Last Modified: ${document.lastModified}`;
}

// ── Hamburger menu toggle ──
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    // Toggle between hamburger ☰ and close ✕ symbols
    hamburgerBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });
}
