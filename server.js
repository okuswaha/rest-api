var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// get mongoose
var mongoose = require('mongoose');
// connect to local mongo db
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./app/models/bookModel');


app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
	res.json({message : 'welcome to rest api'});
});

router.get('/Books', function(req, res){
	Book.find(function(err, books){
		if(err){
			res.status(500);
		}
		else {
			res.json(books);
		}
	});
});

router.get('/Pens', function(req, res){
	res.json({message : 'List of Pens'});
});

app.use('/api', router);

app.listen(port);

console.log('Magic Happens on port '+ port);


//var Bear = require('./app/models/bear');

