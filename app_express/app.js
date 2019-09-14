const express = require("express");
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//load secrets
require('dotenv').config();
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

//var passport = require('passport');
//var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//const bodyParser = require('body-parser');
//const session = require('express-session');
//const cors = require('cors');
//const mongoose = require('mongoose');
//const errorHandler = require('errorhandler');

//app instance
const app = express();
const port = process.env.PORT || "8000";

//view settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "app_server", "views"));

//imports
app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Add Firebase to app
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "mean-webapp.firebaseapp.com",
    databaseURL: "https://mean-webapp.firebaseio.com",
    projectId: "mean-webapp",
    storageBucket: "",
    messagingSenderId: "633149899564",
    appId: "1:633149899564:web:8debb6e93509d4a77da289"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

//declare routes
const indexRouter = require('./app_server/routes/index');
const dashboardRouter = require('./app_server/routes/dashboard');
const loginRouter = require('./app_server/routes/login');

//activate routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app listening
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});