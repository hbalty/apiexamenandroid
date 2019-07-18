/***
 * This file contains user function routes
 * Author : Balti Houssem
 * Date: 21-11-2018
 * version : 0 
 */

var express = require('express') ; 
var router = new express.Router(); 
var userController = require('../controllers/user.controller');  
var newsController = require('../controllers/news.controller');
var passport = require('passport');

// add user router 
router.get('/user/add', userController.addUser); 

router.get('/news', newsController.getNews )

// list users route
router.get('/user/list',passport.authenticate('jwt', {session: false}), userController.listUsers)


module.exports = app => {
    app.use('/',router) ;
}







