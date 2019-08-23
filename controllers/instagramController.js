const axios = require("axios");
require('dotenv/config')

const token = process.env.INSTAGRAM_TOKEN
console.log("Token: ")
console.log(token)

  module.exports = {
    getData: function(req, res) {
      axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`)
      .then(response => {
      res.json(response.data)
      })
      .catch(error => {
      console.log(error);
    })
    }
    
  };

    