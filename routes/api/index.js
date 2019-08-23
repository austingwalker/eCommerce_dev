const router = require("express").Router();
const instagram = require("./instagram");
const products = require("./products");

//Products
router.use("/products", products);

// Instagram
router.use("/instagram", instagram);






module.exports = router;