import axios from "axios";

export default {
  getInstagram: function() {
    return axios.get("/api/instagram");
  },
  getProducts: function(type) {
    return axios.get("/api/products/" + type);
  },
  getDetails: function(id) {
    return axios.get("/api/products/details/" + id);
  }
};
