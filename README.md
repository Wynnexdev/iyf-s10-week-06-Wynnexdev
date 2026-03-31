# Week 6: Weather Dashboard

## Author
- **Name:** Maisori Kitayama
- **GitHub:** [@MaisoriKitayama](https://github.com/MaisoriKitayama)
- **Date:** March 31, 2026

## Project Description
I built a simple, yet highly appealing Weather Dashboard that allows users to search for the current weather and a 5-day forecast for any city in the world. The goal of this project was to practice fetching data from external APIs (OpenWeatherMap API), manipulating the DOM to display that data dynamically, and implementing modern UI design principles like glassmorphism. 

## Technologies Used
- HTML5
- CSS3 (Vanilla)
- JavaScript (ES6+ Async/Await)
- OpenWeatherMap API

## Features
- **Search Functionality:** Enter any city name to fetch real-time weather data.
- **Detailed Weather Info:** Displays temperature, feels-like temperature, humidity, wind speed, pressure, and weather descriptions with icons.
- **5-Day Forecast:** View the expected weather at noon for the next 5 days.
- **Recent Searches History:** Keeps track of the last 5 cities searched using `localStorage`, allowing users to click and search again instantly.
- **Unit Toggle:** Easily switch between Celsius (°C) and Fahrenheit (°F).
- **Geolocation:** Use your browser's location to fetch weather for your exact spot.
- **Dynamic Backgrounds:** The background gradient changes smoothly based on the current weather condition (e.g., clear, clouds, rain, snow).
- **Error Handling:** Provides friendly error messages for invalid city names or inactive API keys.

## How to Run
1. Clone this repository
2. Open `index.html` in your web browser.
*(Note: You need to add an active OpenWeatherMap API key in `script.js` for the data to fetch properly. If you just created a key, please allow up to 2 hours for it to activate).*

## Lessons Learned
While building this project, I learned how to handle asynchronous operations cleanly using `async` and `await`. I also learned how to parse deeply nested JSON responses from a third-party API and use that data to create dynamic HTML elements on the fly. Furthermore, I practiced state management (like toggling between Celsius and Fahrenheit) and saving user data seamlessly using `localStorage`.

## Challenges Faced
One challenge was properly handling errors, such as when a user types a city that doesn't exist, or when the API key hasn't activated yet (resulting in a 401 error). I solved this by adding specific `if` conditions in the `catch` blocks to read the `response.status` and output a human-friendly error message on the screen rather than failing silently in the console. Another challenge was extracting exactly one forecast per day from the 5-day forecast API (which returns data every 3 hours); I solved this by filtering the array for timestamps that included "12:00:00".
