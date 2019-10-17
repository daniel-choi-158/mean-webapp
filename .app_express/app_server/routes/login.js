const express = require("express");
const router = express.Router();

// Require controller modules.
const loginController = require('../controllers/loginController');

router.get('/', loginController.login);

module.exports = router;
