const router = require("express").Router();
const instagramController = require("../../controllers/instagramController");


router.route("/")
  .get(instagramController.getData);


module.exports = router;