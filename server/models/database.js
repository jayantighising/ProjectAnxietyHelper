const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/helperDB',{useNewUrlParser:true, useUnifiedTopology: true});   //it creates new db if not already there and connect to the db; but it is always better to create a new db.

const db= mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log('connected')
});

// Models
require('./Category');