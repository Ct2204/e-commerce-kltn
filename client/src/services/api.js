import axios from "axios";

const url = {
  baseUrl: "http://localhost:8080/api/v1",
  products: "/product/list-product",
  login: "/users/login",
  productdetail: "/product/product-information",
  productdescription: "/product/description",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
