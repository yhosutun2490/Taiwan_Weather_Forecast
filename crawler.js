const request = require('request')
const cheerio = require("cheerio")
// 寫入檔案使用
const fs = require("fs")

function calendarCrawler(date, year = 2022) {
  request({
    url: "https://www.ximizi.net/huangli/2022/2022-9-27.html",
    method: "GET"
  }, (error, res, body) => {
    // 如果有錯誤訊息，或沒有 body(內容)，就 return
    if (error || !body) {
      return console.log('something error');
    }
    else {
      // 用cherrio 解析網頁html 
      const data = [];
      const $ = cheerio.load(body); // 載入 body
      const list = $(".f2_huangli").find('p'); // 遍歷所有p節點
      const solarDate = list.eq(0).text()
      const lunarDate = list.eq(1).text()
      const todayFiveElement = list.eq(4).text()
      const todayGod = list.eq(5).text()
      const yiToDo = list.eq(6).text()
      const NoToDo = list.eq(7).text()
      const badAnimal = list.eq(9).text()
      data.push(Object.assign({ solarDate, lunarDate, todayFiveElement, todayGod, yiToDo, NoToDo, badAnimal }));

      console.log(data)
      fs.writeFileSync("crawlerData.json", JSON.stringify(data));
      console.log('ok data already write')
    }
  })
}

calendarCrawler()

