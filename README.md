# Taiwan_Weather_Forecast
串接台灣中央氣象局各地縣市一周天氣預測資料
# 台灣天氣預測WebAPP 1.0 基本單頁款

後端
* 此專案串接台灣中央氣象局開放API-各地縣市未來一周資料，以Express框架作為本地伺服器透過axios模組發送請求，並寫入種子資料檔  
* 以node.js模組化管理Model，進行後續回傳資料處理和函式設計  
* 基本Server-side渲染搭配hnadle-bars樣板引擎進行處理  

前端
* 以Webpack，將前端Client-side點擊的DOM處理相關js檔，進行模組化管理並轉譯成瀏覽器引擎可辦識的語法  
* SASS語法管理CSS樣式設計，同樣透過Webpack和node-sass進行編譯管理

其他技術學習  
* Promise基本觀念，非同步axios套件基本上是promise物件，可以用then()控制流程


## 功能列表
* 首頁目前預設為臺南市資料，可以點擊更換地點，會隨機變換全台縣市。
* 資料左側和右上為目前天氣資料，右中為接下來60小時天氣預測資料，以每12小時為單位
* 當紫外線指數(uv)，達到過量等級8以上時，會跳出過量pill，從事戶外活動記得防曬 
* 降雨機率超過70 %時，也會跳出下雨pill。


## 專案畫面
<img width="705" alt="image" src="https://user-images.githubusercontent.com/71853581/193443358-493cf50e-7042-44de-8192-efb2d67608dd.png">

## Environment SetUp - 環境建置
* Node.js 14.16.0 ![image](https://camo.githubusercontent.com/b52d5b6da473bbff9ae4e68d34ff4ca91162732372c48dd541aa40eeeb97ecef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d7631342e31362e302d626c7565)
* Express  4.16.4 ![image](https://camo.githubusercontent.com/3bd6a6dae2d65f93243cd289cd76704a303a4a1fb7b9c89912491393eaa9c01a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732d76342e31362e342d626c7565) 
* Express-handle-bars 3.0.0 ![image](https://camo.githubusercontent.com/db9711476e732447317d50897988d14d4553c0782b6aa11c27e799e483068048/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732048616e646c65626172732d76332e302e302d626c7565)
* node-sass 4.14.1
* webpack 5.74.0    
* webpack-cli 4.10.0  
* mini-css-extract-plugin: 0.9.0
## Installing - 專案安裝流程
### 1. 初次使用可git clone 本專案至您的本地資料夾
### 2. 記得到中央氣象局開放資料平台申請自己的API key
* 網址: https://opendata.cwb.gov.tw/devManual/insrtuction
* 申請畫面
<img width="710" alt="image" src="https://user-images.githubusercontent.com/71853581/193443743-5f89a626-388e-4698-a996-2c8f01be5c89.png">  

### 3. Model 資料夾裡的weather.js，記得將request路徑放入自己的Api Key    
<img width="827" alt="image" src="https://user-images.githubusercontent.com/71853581/193443815-4c32db24-e9ad-4d36-bae0-b34edd078970.png">  

### 4. 以終端機並開啟專案資料夾，使用npm install 自動下載相關套件  
### 5. 安裝成功後，npm run app 開啟本地伺服器，並打開localhost//3000，即可進入Web APP首頁  


## Future Development - 未來 2.0 版優化方向 
### 1. UI版面調整新按鈕可選擇想要看的城市天氣資料  
### 2. 各縣市天氣種子資料是一次拉回本地端，未來也許可考慮以單一縣市進行request/response，減低本地儲存資料量


