/***
 * This files contains the necessary functions user routes
 * Author : Balti Houssem
 * Date: 21-11-2018
 * versions : 0 
 */

var express = require('express'); 
var mongoose = require('mongoose');
var jwt = require('../config/jwtIssuer.controller');



 /**
  * User add controller 
  */
exports.addUser = function(req, res){
            let user = User({ // creating user
            })
            user.save(function(err, user){
                if (err) err('something went wrong')
                // creating query 
                var query = { _id : user._id} ;
                jwt.signUserUID(user._id).then((jwtToken) => {
                    User.findOneAndUpdate(query, {token: jwtToken}, (err, user) =>{
                        if (err) res.error('update failed') ; 
                    }).then(updatedUser => {
                        res.json(updatedUser)
                    }).catch(error => {
                        console.log(error);
                    }); 
                })
            })
    }



 /**
  * User list controller 
  * @returns json
  */
exports.listUsers = function(req, res){
    
    User.find({}, function(err, users) {
        var userMap = [];
        //console.log(users);
        users.forEach(function(user) {
        userMap.push(user); 
        });
        res.send(userMap)
        
    });
}


/**
 * Verifying a user in a database
 */
exports.verifyUserExist = function(userId){
    return User.findOne({_id: userId}, function(error, user){
    })
}


/**
 * Delete all users 
 */
exports.deleteAllUser = function(){
    User.find({}, function(err, users) {
        var userMap = {};
        users.forEach(function(user) {
            User.findByIdAndRemove(user._id, err => {
                console.log(err);
            })
        });
        
    });
}

/**
 * Add favorite team
 */
exports.addFavoriteTeam = function(req, res){
    var user_id = req.body.user_id ;
    var team_id = req.body.team_id; 
    if (!user_id || !team_id){
        res.sendStatus(500)
    }

    User.findOne({_id : user_id}, function(err, user){
        if (err){
            res.sendStatus(500)
        }

        if (user){
            if (!user.hasFavoriteTeam(team_id)){
                user.favorites.teams.push({'team_id' : team_id});
                user.save() ;
                res.send(user); 
            } else{
                user.removeFavoriteTeam(team_id)
                user.save()
                res.send(user);
            }
        } else {
            res.sendStatus(401);
        }
    })
}







