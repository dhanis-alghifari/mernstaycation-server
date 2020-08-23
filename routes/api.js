var express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

/* Endpoint API Landing Page */
router.get("/landing-page", apiController.landingPage);

module.exports = router;
