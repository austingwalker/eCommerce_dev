const router = require("express").Router();
const instagram = require("./instagram");
const products = require("./products");



// Instagram
router.use("/instagram", instagram);

//Products
router.use("/products", products);




module.exports = router;