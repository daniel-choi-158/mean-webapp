const express = require('express');
const router = express.Router();

// Require controller modules.
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);

module.exports = router;

/*
const indexController = (req, res) => {
    res.render("index", { title: "Home" });
};
*/

// wiki.js - Wiki route module.
/*
var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;
*/