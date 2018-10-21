var express = require('express');

var routes = function (Customer) {
	var customerRouter = express.Router();

	customerRouter.route('/customer')
		.post(function(req, res){
			var customer = new Customer(req.body);
			customer.save();
			res.status(201).send(customer);
		})
		.get(function(req, res){
			var query = req.query;
			console.log(query);
			Customer.find(query, function(err, customers){
				res.json(customers);
			})
		});

	customerRouter.route('/customers')
	.get(function(req, res){
		Customer.find(function(err, customers){
				res.json(customers);
			})
	});

	customerRouter.route('/customer/:customerId')
	.get(function(req, res){
		console.log(req.params.customerId);
		Customer.findById(req.params.customerId, function(err, customer){
			res.json(customer);
		})
	});

	return customerRouter;

};

module.exports = routes;