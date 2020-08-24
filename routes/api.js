var express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const { uploadSingle } = require("../middleware/multer");

/* Endpoint API Landing Page */
router.get("/landing-page", apiController.landingPage);

/* Endpoint API Detail Page */
router.get("/detail-page/:id", apiController.detailPage);

/* Endpoint API Booking */
router.post("/booking-page", uploadSingle, apiController.bookingPage);

module.exports = router;
