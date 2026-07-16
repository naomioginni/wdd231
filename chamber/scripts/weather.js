// weather.js
// Fetches current weather and a 3-day forecast for Lagos, Nigeria
// from OpenWeatherMap, using fetch + async/await.

// EDIT ME: replace with your own free API key from https://openweathermap.org/api
const apiKey = '9d78074c8b6f9752804e6a7e06554747';

const LAGOS_LAT = 6.5244;
const LAGOS_LON = 3.3792;

const currentTempEl = document.getElementById('currentTemp');
const currentDescEl = document.getElementById('currentDesc');
const forecastListEl = document.getElementById('forecastList');

async function getCurrentWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAGOS_LAT}&lon=${LAGOS_LON}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    currentDescEl.textContent = 'Weather data is currently unavailable.';
    console.error('Error fetching current weather:', error);
  }
}

function displayCurrentWeather(data) {
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;

  currentTempEl.textContent = `${temp}°C`;
  currentDescEl.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

async function getForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAGOS_LAT}&lon=${LAGOS_LON}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Forecast request failed: ${response.status}`);
    const data = await response.json();
    displayForecast(data.list);
  } catch (error) {
    forecastListEl.innerHTML = '<li>3-day forecast unavailable.</li>';
    console.error('Error fetching forecast:', error);
  }
}

function displayForecast(forecastList) {
  // The 5-day/3-hour forecast returns 8 entries per day (every 3 hours).
  // Grab the entry closest to midday for each of the next 3 days.
  const dailyEntries = forecastList.filter(entry => entry.dt_txt.includes('12:00:00')).slice(0, 3);

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  forecastListEl.innerHTML = dailyEntries.map(entry => {
    const date = new Date(entry.dt * 1000);
    const dayLabel = dayNames[date.getDay()];
    const temp = Math.round(entry.main.temp);
    return `<li><span class="forecast-day">${dayLabel}</span><span class="forecast-temp">${temp}°C</span></li>`;
  }).join('');
}

getCurrentWeather();
getForecast();
