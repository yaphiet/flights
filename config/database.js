var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
    {useNewUrlParser: true, useCreateIndex: true}
);

var db = mongoose.connection;
 
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
}).catch(function(error){
    console.error(error)
});