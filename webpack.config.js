const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/promisfy.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'promisfy.js',
    libraryTarget: 'umd'
  }
}