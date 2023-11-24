import axios from "axios";

const url = {
  baseUrl: "http://localhost:8080/api/v1",
  products: "/product/list-product",
  login: "/users/login",
  register: "/users/register",
  productdetail: "/product/product-information",
  productsbycategory: "/product/products-category",
  productdescription: "/product/description",
  postProductSeller: "/seller/product/add",
  getProductSellerById: "/seller/product",
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
