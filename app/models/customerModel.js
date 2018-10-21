var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerModel = new Schema({
	firstName : { type: String },
	lastName : { type: String },
	email : { type: String }
});

module.exports = mongoose.model('Customer', customerModel);