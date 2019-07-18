// Third part libraries
var express = require("express")
var app = express()
var consign = require('consign')
const helmet = require('helmet')
const nodeenv = require('nodeenv');

// custom controllers 
var config = require('./config.js')
var userController = require('./controllers/user.controller') // to be removed in prod



// models
User = require('./models/user');

passport = require('passport');




const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(passport.initialize()); 
app.use(helmet())



consign(config.consign)
  .include('config')
  .then('controllers')
  .then('routes')
  .into(app)



//notification.sendNotificationById();

app.listen(config.server.port, () => {
console.log("Server running on port " + config.server.port  );
});

