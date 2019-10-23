const express = require("express");
const bodyParser = require("body-parser");
const firestore = require("@google-cloud/firestore");
const uuid = require("uuid/v1");
//const mongoose = require("mongoose");
var moment = require('moment');

//data models
//const Transaction = require("./models/transaction");

const app = express();
const db = new firestore({
  projectId: "abacus-mean",
  keyFilename: "../secrets/credentials-abacus-owner.json"
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
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//ROUTES: Transaction
app.post("/api/transactions", (req, res, next) => {
  var sentdate = moment(req.body.date).toDate();

  const transaction = {
    id: uuid(),
    actionType: req.body.actionType,
    symbol: req.body.symbol,
    quantity: req.body.quantity,
    price: req.body.price,
    date: sentdate,
    commissions: req.body.commissions,
    description: req.body.description
  };
  db.collection("transactions")
    .doc(transaction.id)
    .set(transaction)
    .then(setDoc => {
      res.status(201).json({
        message: "Successfully added new transaction with ID " + transaction.id,
        transactionID: transaction.id
      });
    });
});

app.put("/api/transactions/:id", (req, res, next) => {
  var sentdate = moment(req.body.date).toDate();
  const transaction = {
    id: req.body.id,
    actionType: req.body.actionType,
    symbol: req.body.symbol,
    quantity: req.body.quantity,
    price: req.body.price,
    date: sentdate,
    commissions: req.body.commissions,
    description: req.body.description
  };
  let existingDoc = db.collection("transactions").doc(req.params.id)
    .update(transaction)
    .then(result => {
      console.log(result);
      res.status(200).json('update successful!');
  })
});

app.get("/api/transactions", (req, res, next) => {
  let results = [];

  let allTransactions = db
    .collection("transactions")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        results.push(doc.data());
      });
      results.forEach(transaction => {
        transaction.date = transaction.date.toDate();
      });
      console.log(results);
      res.status(200).json({
        message: "Successfully retrieved transactions.",
        transactions: results
      });
    });
});


app.get("/api/transactions/:id", (req, res, next) => {
  //let results = [];

  let query = db.collection("transactions")
    .doc(req.params.id)
    .get()
    .then(doc => {
      if (doc.exists) {
        //results.push(doc.data());
        const transaction = {
          id: doc.data().id,
          actionType: doc.data().actionType,
          symbol: doc.data().symbol,
          quantity: doc.data().quantity,
          price: doc.data().price,
          date: doc.data().date.toDate(),
          commissions: doc.data().commissions,
          description: doc.data().description
        };
        res.status(200).json({
          transaction
        });
      } else {
        res.status(404).json({ message: "ERROR: no documents with ID " + req.params.id + " not found!" });
      };
    });
});

app.delete("/api/transactions/:id", (req, res, next) => {
  console.log("deleting document with ID: " + req.params.id);
  let deleteDoc = db
    .collection("transactions")
    .doc(req.params.id)
    .delete()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "post deleted!"
      });
    });
});

//ROUTES: Holdings
app.post("/api/holdings", (req, res, next) => {});
app.get("/api/holdings", (req, res, next) => {});
app.delete("/api/holdings/:id", (req, res, next) => {});

module.exports = app;
