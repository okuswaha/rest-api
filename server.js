var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// get mongoose
var mongoose = require('mongoose');
// connect to local mongo db
var db = mongoose.connect('mongodb://localhost/db', function(err){
	if(err){
		console.log("Could not connect");
	} else {
		console.log("successfully connected");
	}

});

var Book = require('./app/models/bookModel');

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

bookRouter = require('./app/routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.listen(port);

console.log('Magic Happens on port '+ port);


//var Bear = require('./app/models/bear');

