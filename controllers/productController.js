const db = require("../models");

// Defining methods for the gamedayController
module.exports = {
  findProducts: function(req, res) {
    db.Products.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  }
};