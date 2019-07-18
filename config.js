// Contains all static parameters for the server to operate
const { NODE_ENV } = process.env;
const config = `./config/config.${NODE_ENV || 'development'}.js`;
module.exports = require(config);