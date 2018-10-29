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

var Customer = require('./app/models/customerModel');
var Order = require('./app/models/orderModel');

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8052;

customerRouter = require('./app/routes/customerRoutes')(Customer);
orderRouter = require('./app/routes/orderRoutes')(Order);

app.use('/customers',customerRouter);
app.use('/orders',orderRouter);

var twilioRouter = express.Router();
twilioRouter.route('/message')
		.get(function(req, res){
			console.log("Get Call");
			res.json({"message":"get call"});
		})
		.post(function(req, res){
			const accountSid = 'AC6e7ae719913a9db72e67c90105433965';
			const authToken = '1eb067074880200d1dd5f151efd0d620'; 
			var twilio = require('twilio');
			var client = new twilio(accountSid, authToken);
			//const client = require('twilio')(accountSid, authToken); 
 
				client.messages 
	      .create({
	         body : 'Hello from Node',
	         to: '+17245545274',  
	         from: '+19403995939'   
	       }) 
	      .then(message => console.log(message.sid)) 
	      .done();
		res.json({message : 'Message Delivered'});
			});

app.use('/twilio',twilioRouter);



app.listen(port);

console.log('Magic Happens on port '+ port);


