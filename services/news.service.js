var fs = require('fs');

/**
 * Retrieving live matches from API 
 * @returns Promise
 */
exports.getNews = function(language){

    let news = [
        {
            'title' : 'Premier article',
            'text' : 'bla bla'
        },
        {
            'title' : 'deuxième article',
            'text' : 'bla bla'
        },
        {
            'title' : 'troisième article',
            'text' : 'bla bla'
        },
    ]
    return new Promise((resolve,reject) => {
        resolve(news)
    })
    
}