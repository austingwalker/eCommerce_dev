const router = require("express").Router();
const productController = require("../../controllers/productController");


router.route("/:type")
  .get(productController.findProducts);


module.exports = router;