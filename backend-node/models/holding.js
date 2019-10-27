const mongoose = require('mongoose');

const Transaction = require("./models/transaction");


const holdingSchema = mongoose.Schema({
    symbol: {type: String, required: true },
    quantity: {type: String, required: true },
    AVGprice: {type: String, required: true },
    commissions: {type: String, required: true, default: 0 },
    description: { type: String, required: false },
});

module.exports = mongoose.model('Holding', holdingSchema);