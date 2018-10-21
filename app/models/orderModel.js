var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderModel = new Schema({
	orderId: {type : String},
	orderDate: {type: Date}
});

module.exports = mongoose.model('Order', orderModel);