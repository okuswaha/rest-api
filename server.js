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
var Customer = require('./app/models/customerModel');
var Order = require('./app/models/orderModel');

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

bookRouter = require('./app/routes/bookRoutes')(Book);
customerRouter = require('./app/routes/customerRoutes')(Customer);
orderRouter = require('./app/routes/orderRoutes')(Order);

app.use('/api', bookRouter);
app.use('/customers',customerRouter);
app.use('/orders',orderRouter);



app.listen(port);

console.log('Magic Happens on port '+ port);


