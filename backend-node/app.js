const express = require('express');
const bodyParser = require('body-parser');
const firestore = require('@google-cloud/firestore');

const app = express();
const db = new firestore({
    projectId: 'abacus-mean',
    keyFilename: '../secrets/credentials-abacus-owner.json',
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
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

app.post('/api/transactions', (req, res, next) => {
    const transaction = req.body;
    console.log(transaction);
    res.status(201).json({
        message: "Successfully added new transaction.",
        transaction: transaction
    });
});

app.get('/api/transactions', (req, res, next) => {
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