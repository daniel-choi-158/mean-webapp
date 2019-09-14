const express = require("express");
const router = express.Router();

// Require controller modules.
const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.dashboard);
router.get('/cash', dashboardController.cash);
module.exports = router;
