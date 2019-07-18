/***
 * This files contains the necessary functions for jwt authentification
 * Author : Balti Houssem
 * Date: 31-10-2018
 * versions : 0 
 */
var jwt = require('jsonwebtoken');

/**
 * Signs user id using Json Web tokens
 * @param {String} uid 
 */
exports.signUserUID = function(uid){
    token = jwt.sign({uid: uid}, 'speedgoals-thegeekshubproject') ;

    return new Promise ((resolve, error) => {
        resolve(token) ;
    })
}

exports.verifyToken = function(token, secret){
    let isAuthentic = jwt.verify(token, secret); 
    return isAuthentic;  
}
