const express = require('express')
const app = express()
const port = 3000

//導入樣板引擎
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// 後台API引入資料
const weatherRequest = require('./model/weather') // Promise物件(axios)
const weatherDataAPI = require('./model/transformData')
let allCityData = ''
weatherRequest.then(data => {
  allCityData = data
}).catch(error => { console.log(error) })
// 預設種子資料為台南
weatherRequest.then(data => {
  let defaultCity = '臺南市'
  const cityData = weatherDataAPI.getCityAllData(defaultCity, data)
  return cityData
}).then((citydata) => {
  const todayWeather = weatherDataAPI.currentWeatherData(citydata)
  const forecastWeather = weatherDataAPI.forecastWeatherData(citydata)
  const tdweatherDes = todayWeather.weatherDescription.split('。')[0]
  // 首頁路由
  app.get('/', (req, res) => {
    res.render('index', { tdweather: todayWeather, fweather: forecastWeather, todayDes: tdweatherDes })
  })
}).catch(error => { console.log(error) })

// 監聽本地端
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
