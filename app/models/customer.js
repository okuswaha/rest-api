var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerModel = new Schema({
	firstName : { type: String },
	lastName : { type: String },
	email : { type: String }
});
