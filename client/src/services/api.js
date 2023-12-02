import axios from "axios";

const url = {
  baseUrl: "http://localhost:8080/api/v1",
  //auth
  login: "/users/login",
  register: "/users/register",
  logout:"/users/logout",
  //product
  products: "/product/list-product",
  productdetail: "/product/product-information",
  productsbycategory: "/product/products-category",
  productdescription: "/product/description",
  productoption: "product/product-option",
  productoptiondetail: "product/product-option-detail",
  productitem: "product/product-item",
  productitems: "/product/product-items",
  listCategory:"/product/category",
  //Cart
  createCart: "/cart-items",
  updateCartItem:"/cart-items/update-all",
  getCartItem: "/cart-items",
  deleteCartItem: "/cart-items",
  //Order
  createOrder: "/order/create-order",
  updateOrder: "/order/update-order",
  getOrderById: "/order/by-order",
  getOrderByStatus: "/order/by-status",
  getOrderByUserId: "/order/by-user",
  getOrderDetailByOrderId:"/order/get-order-detail-by-order",
  //Payment
  checkOutWithVnpay: "/order/payment/check-out-with-vnpay",
  checkOutWithPaypal: "/order/payment/check-out-with-pay-pal",
  getPaymentInfo: "/order/payment/get/payment/info",
  paymentSuccess: "/order/payment/success",
  paymentCancel:"/order/payment/cancel",
  //Admin
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
