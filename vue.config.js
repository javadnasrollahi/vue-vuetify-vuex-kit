'use strict'
const path = require('path')

module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    host: "localhost",
      port: 8585,
  },
  outputDir: "dist/assets",
  indexPath: "../panel/index.html", // keep in root/src/
}