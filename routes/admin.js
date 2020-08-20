var express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middleware/multer");

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
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

/* Endpoint CRUD Item admin page. */
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);

/* Endpoint CRUD Feature admin page. */
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, adminController.addFeature);
router.put("/item/update/feature", uploadSingle, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);


module.exports = router;
