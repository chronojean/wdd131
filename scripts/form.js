// ─────────────────────────────────────────────
// Product data array
// ─────────────────────────────────────────────
const products = [
    { id: "fc-1888", name: "flux capacitor",     averagerating: 4.5 },
    { id: "fc-2050", name: "power laces",         averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits",       averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp drive",          averagerating: 5.0 },
    { id: "qe-3000", name: "quantum entangler",   averagerating: 4.8 },
    { id: "ss-4000", name: "solar sail array",    averagerating: 4.2 }
];

// ─────────────────────────────────────────────
// Populate product <select> from array
// ─────────────────────────────────────────────
function populateProducts() {
    const productSelect = document.getElementById("product");
    if (!productSelect) return;

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// ─────────────────────────────────────────────
// Required-field arrows — show/hide logic
// Each required field has its own static SVG arrow in the HTML.
// The arrow is hidden (display:none) when its field is filled.
// ─────────────────────────────────────────────
function initArrows() {
    const productEl      = document.getElementById("product");
    const dateEl         = document.getElementById("install-date");
    const ratingInputs   = document.querySelectorAll("input[name='rating']");

    const arrowProduct   = document.getElementById("arrow-product");
    const arrowRating    = document.getElementById("arrow-rating");
    const arrowDate      = document.getElementById("arrow-date");

    // Show arrow if field is empty; hide if filled
    function syncArrow(arrow, isFilled) {
        if (!arrow) return;
        arrow.style.display = isFilled ? "none" : "";
    }

    // Product select
    if (productEl && arrowProduct) {
        productEl.addEventListener("change", () => {
            syncArrow(arrowProduct, productEl.value !== "");
        });
    }

    // Star rating (any radio in the group)
    if (arrowRating) {
        ratingInputs.forEach(radio => {
            radio.addEventListener("change", () => {
                const checked = document.querySelector("input[name='rating']:checked");
                syncArrow(arrowRating, !!checked);
            });
        });
    }

    // Installation date
    if (dateEl && arrowDate) {
        dateEl.addEventListener("change", () => {
            syncArrow(arrowDate, dateEl.value !== "");
        });
    }
}

// ─────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────
function init() {
    populateProducts();
    initArrows();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
