const axios = require('axios')
const fs = require('fs')
const path = require('path') // path模組可將相對路徑轉為絕對路徑
const forecastUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${apiKey}&limit=26&format=JSON`
// Import your personal API Key
// axios 本身就是 promise
const createWeatherSeedData = axios.get(forecastUrl).then((response) => {
  const maindata = response.data.records.locations[0].location
  fs.writeFileSync(path.resolve(__dirname + '/TaiwanForecast.json'), JSON.stringify
    (maindata), (err) => {
      if (err) {
        console.log("檔案寫入失敗")
      };
      console.log("檔案寫入操作完成!");
    })
  return maindata

}).catch((error) => console.log(error))

module.exports = createWeatherSeedData