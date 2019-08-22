module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("Products", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      price: {
          type: DataTypes.DECIMAL,
          allowNull: false
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      } 
    }, {timestamps: false});
    return Products;
  };
