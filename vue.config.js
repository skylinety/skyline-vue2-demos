const path = require('path')
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      '/filesys-perpc': {
        target: 'http://10.10.160.85:9003', //大数据治理
        changeOrigin: true,
      },
      '/MapServer': {
        target: 'http://10.10.160.85:9008',
        changOrigin: true,
      },
    },
  },
  configureWebpack: function () {
    // console.log(config.module.rules[2])
    return {
      plugins: [
        new CopyWebpackPlugin([
          { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
          { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
          { from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' },
        ]),
        new webpack.DefinePlugin({
          // Define relative base path in cesium for loading assets
          CESIUM_BASE_URL: JSON.stringify(''),
        }),
      ],
      module: {
        /* cesium quirks */
        unknownContextCritical: false,
        unknownContextRegExp: /^.\/.*$/,
        /* ^^^^^ https://github.com/AnalyticalGraphicsInc/cesium/issues/4876 */
        rules: [
          {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: ['url-loader'],
          },
        ],
      },
    }
  },
}
