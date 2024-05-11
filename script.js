const apiKey = `11c57aea3c67f819dfa16a30458e8118`;

async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // Log the data here
  return data; // Return the data if you want to use it elsewhere
}

document.getElementById("search-button").addEventListener("click", async () => {
  const cityInput = document.getElementById("search-bar");
  const cityName = cityInput.value.trim(); // Trim any whitespace
  console.log(cityName);

  if (cityName) {
    // Check if cityName is not empty
    const weatherData = await getWeather(cityName); // Wait for the weather data
    console.log(weatherData.main.temp); // Log the weather data

    document.getElementById("temperature").innerText =
      (weatherData.main.temp - 273).toFixed(1) + " °C";
    document.getElementById("city").innerText = cityName.toUpperCase();
    document.getElementById("humidity-value").innerText =
      weatherData.main.humidity + " %";
    document.getElementById("wind").innerText = weatherData.wind.speed + " m/s";
  } else {
    console.log("Please enter a city name."); // Provide feedback if no city name is entered
  }
});
