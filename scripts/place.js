// WDD 131 - Sprint 3 Place Page

// Set footer dates
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Calculate Wind Chill
const temp = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windspeed').textContent);

function calculateWindChill(t, v) {
    // Metric formula for Celsius and km/h
    // Wind Chill = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

const windChillElement = document.getElementById('windchill');

// Check conditions for Metric (Temp <= 10C, Wind > 4.8 km/h)
if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
