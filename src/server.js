var express = require ('express')
var app = express();

module.exports = function(app) {
    'use strict';

    //Make db connection, return a promise to make an async call

    return new Promise((resolve, reject) => {
        db.connect((err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
};

export 
