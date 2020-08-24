var express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

/* Endpoint API Landing Page */
router.get("/landing-page", apiController.landingPage);

/* Endpoint API Detail Page */
router.get("/detail-page/:id", apiController.detailPage);

module.exports = router;
