const db = require("../models");

// Defining methods for the gamedayController
module.exports = {
  findProducts: function(req, res) {
    console.log(req.params)
    const type = req.params.type;
    console.log(type)
    db.Products.findAll({
      where: {
        category: {[type]: true}
      }
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  },
  findDetails: function(req, res){
    db.Products.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  }
};