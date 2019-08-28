const router = require("express").Router();
const productController = require("../../controllers/productController");


router.route("/:type")
  .get(productController.findProducts);

  router.route("/details/:id")
  .get(productController.findDetails);


module.exports = router;