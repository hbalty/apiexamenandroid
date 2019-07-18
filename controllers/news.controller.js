
var express = require('express'); 
var jwt = require('../config/jwtIssuer.controller');
var newsService = require('../services/news.service')


 /**
  * get news 
  */
exports.getNews = function(req, res){
    newsService.getNews().then((data) => {
        res.send(data) ;
    })
}





