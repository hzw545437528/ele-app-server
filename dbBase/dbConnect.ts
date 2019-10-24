const monggose = require('mongoose');

monggose.connect('mongodb://localhost/ele_app_database');

let db = monggose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection...');
})

module.exports = monggose