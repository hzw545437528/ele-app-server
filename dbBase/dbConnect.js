"use strict";
var monggose = require('mongoose');
monggose.connect('mongodb://localhost/ele_app_database');
var db = monggose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connection...');
});
module.exports = monggose;
