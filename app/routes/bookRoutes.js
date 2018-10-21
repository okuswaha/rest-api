var express = require('express');

var routes = function(Book){

var router = express.Router();

router.get('/', function(req, res){
	res.json({message : 'welcome to rest api'});
});

router.route('/Order')
.post(function(req, res){
	var book = new Book(req.body);
	book.save();
	res.status(201).send(book);
})
.get(function(req, res){
	var query = req.query;
	console.log(query);
	Book.find(query, function(err, books){
		res.json(books);
	})
});

router.route('/Order/:bookId')
.get(function(req, res){
	console.log(req.params.bookId);
	Book.findById(req.params.bookId, function(err, books){
		res.json(books);
	})
});

router.get('/Books', function(req, res){
	Book.find(function(err, books){
		if(err){
			res.status(500);
			res.set("connection","close");
			res.json({error:true, error_messge:"error message"});
		}
		else {
			res.json(books);
		}
	});
});

router.get('/Pens', function(req, res){
	res.json({message : 'List of Pens'});
});
return router;

};

module.exports = routes;