const axios = require('axios');

// Fetch weather information from an external API
exports.fetchWeatherInfo = async (city) => {
  try {
    const apiKey = 'your_api_key'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    throw error;
  }
};
