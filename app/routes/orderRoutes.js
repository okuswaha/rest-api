var express = require('express');

var routes = function(Order) {
	var orderRouter = express.Router();

	orderRouter.route('/order')
		.post(function(req, res){
			var order = new Order(req.body);
			order.save();
			res.status(201).send(order);
		})
		.get(function(req,res){
			var query = req.query;
			Order.find(query, function(err, order){
				res.json(order);
		})
	});

	orderRouter.route('/orders')
		.get(function(req, res){
			Order.find(function(err, orders){
					res.json(orders);
		})
	});

	orderRouter.route('/order/:orderId')
		.get(function(req, res){
			Order.findById(req.params.orderId, function(err, order){
				res.json(order);
		})
	});

	return orderRouter;
};

module.exports = routes;
