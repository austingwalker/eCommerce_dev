const axios = require("axios");

  module.exports = {
    getData: function(req, res) {
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=##########')
      .then(response => {
      res.json(response.data)
      })
      .catch(error => {
      console.log(error);
    })
    }
    
  };

    