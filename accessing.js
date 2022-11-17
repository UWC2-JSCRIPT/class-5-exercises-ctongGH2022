/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * Accessing Elements
 */

// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHeader = document.getElementById('weather-head');
weatherHeader.textContent = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const classSun = document.querySelectorAll('.sun');
classSun.forEach(sun => {
    sun.style.backgroundColor = 'orange'; });

// Change the class of the second <li> from "sun" to "cloudy"
document.querySelectorAll('li')[1].className = 'cloudy';
