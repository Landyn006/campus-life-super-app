// Welcome button on homepage
function welcomeMsg() {
    alert("Welcome to Campus Life Super App!");
}

// Contact form button
function submitForm() {
    alert("Your message has been submitted!");
}

// External API example: Weather
async function loadWeather() {
    const weatherElement = document.getElementById("weather");

    if (!weatherElement) return;

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.97&longitude=-81.24&current_weather=true");
        const data = await response.json();

        weatherElement.textContent =
            "Current Temperature: " +
            data.current_weather.temperature +
            "°C";
    } catch (error) {
        weatherElement.textContent = "Unable to load weather.";
    }
}

loadWeather();