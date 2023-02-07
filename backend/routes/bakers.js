const express = require("express");
const router = express.Router();

const BakersController = require("../controllers/bakers");

router.get("/", BakersController.getAll);
router.get("/:orderId", BakersController.getBakerByOrderId);
router.post("/", BakersController.createBaker);

module.exports = router;