const db = require("../models");

// Defining methods for the gamedayController
module.exports = {
  findProducts: function(req, res) {
    console.log(req.params)
    const type = req.params.type;
    console.log(type)
    // db.Products.findAll({}).then(function(dbProducts) {
    //   res.json(dbProducts);
    // });
  }
};