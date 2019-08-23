import axios from "axios";

export default {
  getInstagram: function() {
    return axios.get("/api/instagram");
  },
  // getProducts: function() {
  //   return axios.get("/api/products");
  // },
  getProducts: function(type) {
    return axios.get("/api/products/" + type);
  },
};
