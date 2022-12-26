import axios from "axios";

const options = {
  baseURL: "https://auntieanne-demo.proseller.io/product/api/productpreset",
  headers: {
    "Content-Type": "application/json",
  },
};

export default axios.create(options);
