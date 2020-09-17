const makeBabelConfig = require('babel-react-simple');

const config = makeBabelConfig();

if (process.env.NODE_ENV !== 'test') {
  config.presets[0][1].modules = false;
}

console.log(config.presets[0]);

module.exports = config;
