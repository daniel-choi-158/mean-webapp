const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api/transactions', (req, res, next) => {
    const transactions =
        [
            {
                id: "drkljh4435jkh",
                actionType: "BUY",
                symbol: "ASX:PLS",
                quantity: "1000",
                price: "0.3",
                date: "01/09/2019",
                commissions: "14.95",
                description: " trans 1"
            },
            {
                id: "gfkljh3578",
                actionType: "BUY",
                symbol: "ASX:BHP",
                quantity: "1000",
                price: "23",
                date: "01/09/2019",
                commissions: "14.95",
                description: " trans 2"
            }         
        ];

    res.status(200).json({
        message: "Successfully retrieved transactions.",
        transactions: transactions
    });
});

module.exports = app;