// Footer dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

// Weather and Wind Chill Elements
const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');
const conditionElement = document.getElementById('condition');
const weatherIconElement = document.getElementById('weather-icon');

// Function to calculate wind chill in Celsius
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1) + " °C";

// Auyantepuy Coordinates & OpenWeatherMap API details
const LAT = 5.90035;
const LON = -62.54144;
const API_KEY = '103a79523007d732c60060e234217768';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather API unavailable');
        
        const data = await response.json();
        
        // Extract data
        const temp = data.main.temp;
        // API returns wind speed in m/s, convert to km/h
        const windSpeed = data.wind.speed * 3.6;
        const condition = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        
        // Update DOM
        temperatureElement.textContent = Math.round(temp);
        windSpeedElement.textContent = Math.round(windSpeed);
        
        // Capitalize first letter of condition
        const formattedCondition = condition.charAt(0).toUpperCase() + condition.slice(1);
        conditionElement.textContent = formattedCondition;
        
        // Update icon
        weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIconElement.alt = formattedCondition;
        
        // Metric limits for wind chill: T <= 10°C and V > 4.8 km/h
        if (temp <= 10 && windSpeed > 4.8) {
            windChillElement.textContent = calculateWindChill(temp, windSpeed);
        } else {
            windChillElement.textContent = "N/A";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        temperatureElement.textContent = "N/A";
        windSpeedElement.textContent = "N/A";
        conditionElement.textContent = "Error";
        windChillElement.textContent = "N/A";
    }
}

// Fetch the weather data
getWeather();
