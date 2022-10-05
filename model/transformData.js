function totalCityName(originalData) {
  const locationName = []
  originalData.forEach(item => {
    locationName.push(item.locationName)
  })
  return locationName
}
function transDateToDay(date) {
  const inputDate = new Date(date)
  const dayDate = inputDate.getDay()
  switch (dayDate) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
    case 0:
      return 'Sunday';
      break;
  }
}
function getCityAllData(cityName, originalData) {
  const cityData = originalData.find((item) => {
    return item.locationName === String(cityName)
  })
  return cityData
}
// 預設丟回當天日期、星期幾、地點、當天溫度、天氣描述、降雨機率、濕度、風速
function currentWeatherData(cityData) {
  const location = cityData.locationName
  const currentDate = cityData.weatherElement[0].time[0].startTime.slice(0, 10)
  const currentDay = transDateToDay(currentDate)
  const temp = cityData.weatherElement[1].time[0].elementValue[0].value
  const rainPercent = cityData.weatherElement[0].time[0].elementValue[0].value
  const weatherDescription = cityData.weatherElement[10].time[0].elementValue[0].value
  const relativeRH = cityData.weatherElement[2].time[0].elementValue[0].value
  const windSpeed = cityData.weatherElement[4].time[0].elementValue[0].value
  return {
    location,
    currentDate,
    currentDay,
    temp,
    rainPercent,
    weatherDescription,
    relativeRH,
    windSpeed
  }
}
function forecastWeatherData(cityData) {
  const rainPercentage = cityData.weatherElement[0].time
  const averageTemp = cityData.weatherElement[1].time
  const uviIndex = cityData.weatherElement[9].time
  const finalForeCastData = []
  for (let i = 1; i <= 5; i++) {
    const eachDayData = {}
    const eachDay = String(rainPercentage[i].startTime).slice(0, 10)
    const transDay = transDateToDay(eachDay)
    eachDayData.date = String(transDay).slice(0, 3).toUpperCase()
    eachDayData.day = dayNight(i)
    eachDayData.prep = rainPercentage[i].elementValue[0].value
    eachDayData.temp = averageTemp[i].elementValue[0].value
    eachDayData.uvi = uviIndex[i].elementValue[0].value
    finalForeCastData.push(eachDayData)
    function dayNight(i) {
      const time = cityData.weatherElement[0].time[i].startTime.slice(11, 13)
      if (time === '06') {
        return 'Day'
      }
      else {
        return 'Night'
      }
    }
  }
  return finalForeCastData
}


module.exports = {
  totalCityName,
  getCityAllData,
  currentWeatherData,
  forecastWeatherData
}

