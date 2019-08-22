const router = require("express").Router();
const productController = require("../../controllers/productController");


router.route("/")
  .get(productController.findProducts);


module.exports = router;