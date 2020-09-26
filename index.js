const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const Tasks = require('./models/tasks.js');

// MiddleWares
app.use(express.urlencoded());
app.use('/', require('./routes'));     //Setting Up Initial Routes
app.use(express.static('assets'));     //Setting Up Static Directories

app.set('view engine', 'ejs');         //Setting Up View Engine
app.set('views', './views');           //Setting Up Views Directory


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`The Server Is Up And Running At ${port}`);
});