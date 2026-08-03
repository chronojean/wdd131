// Array of products as required by WDD 131 assignment + extra custom products
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp drive",
        averagerating: 5.0
    },
    {
        id: "qe-3000",
        name: "quantum entangler",
        averagerating: 4.8
    },
    {
        id: "ss-4000",
        name: "solar sail array",
        averagerating: 4.2
    }
];

function populateProducts() {
    const productSelect = document.getElementById("product");
    
    if (productSelect && productSelect.options.length <= 1) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", populateProducts);
} else {
    populateProducts();
}
