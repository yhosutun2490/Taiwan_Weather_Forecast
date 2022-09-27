const submit = document.querySelector('.input-zone')
const input = document.querySelector("#city")
const weatherInfo = document.querySelector(".weather-info")
const weatherData = {}
const currentTime = new Date()
let weatherImg_src = ''

function cityWeatherApi(cityName) {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather`
  const city = `?q=${cityName}`
  const myApiKey = `&appid=c01844509687c3f8f0b810e3400aa91c`
  axios.get(baseUrl + city + myApiKey).then((response) => {
    const data = response.data
    weatherData.description = data.weather[0].description
    weatherData.tempK = data.main.temp
    weatherData.windSpeed = data.wind.speed
    weatherData.humidity = data.main.humidity
    weatherData.icon = data.weather[0].icon
    weatherImg_src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
    transformTempC(weatherData.tempK)
    renderWeatherPage()
  })
    .catch((error) => console.log(error))
  console.log(weatherData)
}

function transformTempC(TempK) {
  const TempC = (Number(TempK) - 273.15).toFixed(1)
  weatherData.tempC = TempC
}

function renderWeatherPage() {
  weatherInfo.innerHTML = `<div class="content time">
        <p class="time-title">Current time 現在時間:</p>
        <p class="current-time">${currentTime}</p>
      </div>
      <div class="content temp-status">
        <img class="weather-img"
          src=${weatherImg_src}>
        <p class="temp"> ${weatherData.tempC}°C</p>
        <p class="description">${weatherData.description}</p>
      </div>
      <div class="content other">
        <div class="humility">濕度: ${weatherData.humidity} %</div>
        <div class="wind">風速: ${weatherData.windSpeed} m/s</div>
      </div>`
}

//掛上監聽器
submit.addEventListener('click', function onclickSubmit(event) {
  const cityName = input.value.trim()
  if (cityName.length !== 0) {
    cityWeatherApi(cityName)
    input.value = ''
  }
})



