var express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { upload } = require("../middleware/multer");

/* GET admin page. */
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

/* Endpoint CRUD Category admin page. */
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

/* Endpoint CRUD Bank admin page. */
router.post("/bank", upload, adminController.addBank);
router.put("/bank", upload, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

module.exports = router;
