import {
  totalCityName, getCityAllData, currentWeatherData, forecastWeatherData
}
  from '../../model/transformData'
// import sass file
import '../css/main.scss'
const leftCard = document.querySelector('.w-card-left .content')
const rightCardCurrent = document.querySelector('.today-w')
const rightCardForecast = document.querySelector('.forecast-w')
const button = document.querySelector('.change-btn')

const randomChangeCity = function () {
  const allCity = totalCityName()
  const randomCityName = allCity[Math.floor(Math.random() * allCity.length)]
  const cityWeatherData = getCityAllData(randomCityName)
  const currentWeather = currentWeatherData(cityWeatherData)
  const forecastWeather = forecastWeatherData(cityWeatherData)
  renderTemplate(currentWeather, forecastWeather)
}
function renderTemplate(currentdata, forecastdata) {
  leftCard.innerHTML = `<h2 class="dayname">${currentdata.currentDay}</h2>
        <p class="date">${currentdata.currentDate}</p>
        <p class="loaciton">${currentdata.location} 臺灣(TW)</p>
        <h1 class="temp">${currentdata.temp} 度C</h1>
        <h3 class="w-description">Sunny</h3>`
  rightCardCurrent.innerHTML = `<div class="prep-content">
            <p class="title">PRECIPITAITON</p>
            <p class="value">${currentdata.rainPercent} %</p>
          </div>
          <div class="humidity-content">
            <p class="title">HUMIDITY</p>
            <p class="value">${currentdata.relativeRH} %</p>
          </div>
          <div class="wind-content">
            <p class="title">WIND</p>
            <p class="value">${currentdata.windSpeed} m/s</p>
          </div>`
  rightCardForecast.innerHTML = ``
  forecastdata.forEach(item => {
    rightCardForecast.innerHTML += ` <div class="forecast-content">
            <i class="fa fa-sun-o w-logo" aria-hidden="true"></i>
            <p class="today-day">${item.date}</p>
            <p class="day-night">${item.day}</p>
            <p class="prec-percent">${item.prep} %</p>
            <p class="temp">${item.temp} °C</p>
            <p class="uvi">${item.uvi} uv</p>
          </div>`

  });
}

button.addEventListener('click', randomChangeCity)
