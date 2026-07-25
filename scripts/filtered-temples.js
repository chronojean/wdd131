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

// ── Temple data array ──
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/400x250/caracas-venezuela-temple-lds-1027056-wallpaper.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-249027-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 58005,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-california-temple-895765-wallpaper.jpg"
  }
];

//function that draws the temples to the page
function displayTemples(templesArray) {
  const templesGallery = document.querySelector('.gallery');
  if (!templesGallery) return;

  // Clear existing content
  templesGallery.innerHTML = '';
  // Loop through the temples array and create cards for each temple
  templesArray.forEach((temple) => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');
    // Create the inner HTML for the temple card
    templeCard.innerHTML = `
      <h2>${temple.templeName}</h2>
      <div class="temple-info">
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area} sq ft</p>
      </div>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
      >
    `;
    // Append the temple card to the gallery
    templesGallery.appendChild(templeCard);
  });
}

// ── Filter criteria ──
const filtros = {
  home:  "all",   // default filter
  old:   1900,    
  new:   2000,
  large: 90000,   
  small: 10000,   
};

// ── Filter function ──
function filtered_temples(filter) {
  let filteredTemples;
  if (filter === "all") {
    filteredTemples = temples;                                // Show all temples
  } else if (filter === 1900) {
    filteredTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);  // Extract the year from the dedicated date string "2000, August, 20" becomes 2000
      return year < filter;                                   // Temples dedicated before 1900
    });
  }
  else if (filter === 2000) {
    filteredTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);  // Extract the year from the dedicated date string
      return year >= filter;                                  // Temples dedicated in or after 2000
    });
  }
  else if (filter === 90000) {
    filteredTemples = temples.filter(temple => temple.area > filter); // Temples larger than 90,000 sq ft
  }
  else if (filter === 10000) {
    filteredTemples = temples.filter(temple => temple.area < filter); // Temples smaller than 10,000 sq ft
  }
  displayTemples(filteredTemples);
}

// ── Event listeners for navigation links ──
document.querySelectorAll("#main-nav a").forEach((link) => {// Select all anchor tags in the navigation
  link.addEventListener("click", (e) => { // Add click event listener to each link
    e.preventDefault();                   
    const key = link.hash.slice(1);       // Get the hash value (filter key) from the link ex "#old" becomes "old"
    filtered_temples(filtros[key]);       // Call the filter function with the corresponding filter value
  });
});

displayTemples(temples);