const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/planer_tasks_db_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting To Database'));


db.once('open', function(){
    console.log('Successfully connected to DB : planer_tasks_db_development');
});