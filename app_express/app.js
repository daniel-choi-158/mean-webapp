//index.js


const path = require("path");
const express = require("express");
//const bodyParser = require('body-parser');
//const session = require('express-session');
//const cors = require('cors');
//const mongoose = require('mongoose');
//const errorHandler = require('errorhandler');

//app instance
const app = express();
const port = process.env.PORT || "8000";

//imports
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//route controllers
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});
app.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
});



//app listening
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});