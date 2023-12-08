import axios from "axios";

const url = {
  baseUrl: "http://localhost:8080/api/v1",
  products: "/product/list-product",
  login: "/users/login",
  register: "/users/register",
  productdetail: "/product/product-information",
  productsbycategory: "/product/products-category",
  productdescription: "/product/description",
  productoption: "product/product-option",
  productoptiondetail: "product/product-option-detail",
  productitem: "product/product-item",
  productitems: "product/product-items",
  createCart: "cart-items",
  postProductSeller: "/seller/product/add",
  getProductSellerById: "/seller/product",
  getListProductOfSeller: "/seller/list-product/1?perPage=200&currentPage=1",
  updateProductOfSeller: "/seller/product/update",
  deleteProductOfSellerById: "/seller/product/delete",
  postFileImage: "/seller/product/option/add",
  getListProductOnePage: "/seller/list-product",
  postDescriptionBySeller: "/seller/product/description/add",
  getDescriptionBySeller: "/seller/product/description",
  getProfileOfUser: "/users/profile",
  updateUserProfile: "/users/profile/update",
  getAddressOfUserById: "/users/address/by-user",
  postAddressOfUserById: "/users/address/add",
  updateAddressOfUserById: "/users/address/update",
  deleteAddressOfUserById: "/users/address/delete",
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
