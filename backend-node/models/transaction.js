const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    actionType: { type: String, required: true },
    symbol: {type: String, required: true },
    quantity: {type: String, required: true },
    price: {type: String, required: true },
    date: {type: Date, required: true },
    commissions: {type: String, required: true, default: 0 },
    description: {type: String, required: false }
});

module.exports = mongoose.model('Transaction', transactionSchema);