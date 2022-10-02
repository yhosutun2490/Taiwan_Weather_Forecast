const path = require('path') // path模組可將相對路徑轉為絕對路徑
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽出css的套件
module.exports = {
  mode: 'production', // 指定模式 production為壓縮模式
  context: path.resolve(__dirname, './public/src'), //指定起始資料夾
  entry: './index.js', // webpack 打包的起始檔案
  output: {
    path: path.resolve(__dirname, './public/dist'), // 輸出合併檔的資料夾
    filename: 'bundle.js'// 打包輸出的檔名
  },
  resolve: {
    fallback: {
      fs: false
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
}