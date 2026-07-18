// Footer dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

// Wind Chill Calculation
const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');

// Parse static values from the HTML
const temp = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Function to calculate Wind Chill in Celsius
// Formula: 13.12 + 0.6215 * T - 11.37 * V^0.16 + 0.3965 * T * V^0.16
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1) + " °C";

// Check viability conditions
// Temperature <= 10 °C and Wind Speed > 4.8 km/h
if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed);
} else {
    windChillElement.textContent = "N/A";
}
