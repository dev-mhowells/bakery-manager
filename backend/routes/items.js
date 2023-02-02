const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/items");

router.get("/", ItemsController.getAll);
router.post("/", ItemsController.createItem);
router.get('/getImage', ItemsController.getImage);
router.post('/postImage', ItemsController.postImage);

module.exports = router;
