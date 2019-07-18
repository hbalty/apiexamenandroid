var exports = module.exports = {
  isTest: true,
  server: {
    port: process.env.SPEEDGOALS_PORT || 3000,
    host: 'localhost'
  },
  bodyParser: {
    extended: true
  },
  footballAPI: {
    uri: 'https://api-football-v1.p.mashape.com/v2',
    apiKey:  process.env.SPEEDGOALS_API_KEY || 'cc29afab5dmshf06abaa97b61004p153061jsn122957d29a06'
  },
  consign: {
    verbose: false
  }
};