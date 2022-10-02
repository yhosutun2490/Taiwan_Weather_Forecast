const axios = require('axios')
const fs = require('fs')
// Import your personal API Key
const apiKey = require('./myApiKey.json')
function createWeatherSeedData() {
  // 資料為台灣氣象局
  const forecastUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${apiKey.TaiwamWeatherApi}&limit=26&format=JSON`

  axios.get(forecastUrl).then((response) => {
    const maindata = response.data.records.locations
    const locationData = maindata[0].location
    fs.writeFileSync('./model/TaiwanForecast.json', JSON.stringify(locationData))
  })
    .catch((error) => console.log(error))

}

module.exports = createWeatherSeedData