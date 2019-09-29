const express = require('express');

const app = express();

app.use('/api/transactions', (req, res, next) => {
    const transactions =
        [
            {
                id: "drkljh4435jkh",
                actionType: "BUY",
                shares: "ASX:PLS",
                quantity: "1000",
                price: "0.3",
                date: "01/09/2019",
                commissions: "14.95",
                description: " trans 1"
            },
            {
                id: "gfkljh3578",
                actionType: "BUY",
                shares: "ASX:BHP",
                quantity: "1000",
                price: "23",
                date: "01/09/2019",
                commissions: "14.95",
                description: " trans 2"
            }         
        ];

    res.status(200).json({
        message: "Successfully retrieved transactions.",
        trasactions: transactions
    });
});

module.exports = app;