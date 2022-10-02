const express = require('express')
const app = express()
const port = 3000
//導入樣板引擎
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// 後台資料
const weatherDataAPI = require('./model/transformData')
// 預設種子資料為台南
let defaultCity = '臺南市'
const cityData = weatherDataAPI.getCityAllData(defaultCity)
const todayWeather = weatherDataAPI.currentWeatherData(cityData)
const forecastWeather = weatherDataAPI.forecastWeatherData(cityData)
// 首頁路由
app.get('/', (req, res) => {
  res.render('index', { tdweather: todayWeather, fweather: forecastWeather })
})
console.log(weatherDataAPI.totalCityName())

// 監聽本地端
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})