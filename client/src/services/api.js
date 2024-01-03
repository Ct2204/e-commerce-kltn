import axios from 'axios'

const url = {
  baseUrl: 'http://localhost:8080/api/v1',
  //auth
  login: '/users/login',
  register: '/users/register',
  logout: '/users/logout',
  //product
  products: '/product/list-product',
  productdetail: '/product/product-information',
  productsbycategory: '/product/products-category',
  productdescription: '/product/description',
  productoption: 'product/product-option',
  productoptiondetail: 'product/product-option-detail',
  productitem: 'product/product-item',
  productitems: '/product/product-items',
  listCategory: '/product/category',
  //Cart
  createCart: '/cart-items',
  updateCartItem: '/cart-items/update-all',
  getCartItem: '/cart-items',
  deleteCartItem: '/cart-items',
  //Order
  createOrder: '/order/create-order',
  updateOrder: '/order/update-order',
  getOrderById: '/order/by-order',
  getOrderByStatus: '/order/by-status',
  getOrderByUserId: '/order/by-user',
  getOrderDetailByOrderId: '/order/get-order-detail-by-order',
  //Payment
  checkOutWithVnpay: '/order/payment/check-out-with-vnpay',
  checkOutWithPaypal: '/order/payment/check-out-with-pay-pal',
  getPaymentInfo: '/order/payment/get/payment/info',
  paymentSuccess: '/order/payment/success',
  paymentCancel: '/order/payment/cancel',
  //Admin
  postProductSeller: '/seller/product/add',
  getProductSellerById: '/seller/product',
  getListProductOfSeller: '/seller/list-product/1?perPage=200&currentPage=1',
  updateProductOfSeller: '/seller/product/update',
  deleteProductOfSellerById: '/seller/product/delete',
  createOptionProduct: '/seller/product/option/add',
  getListProductOnePage: '/seller/list-product',
  postDescriptionBySeller: '/seller/product/description/add',
  getDescriptionBySeller: '/seller/product/description',
  createProductOptionAndItem: '/seller/product/option/add',
  uploadImageProduct: '/seller/product/upload-file',
  //profile
  getProfileOfUser: '/users/profile',
  updateUserProfile: '/users/profile/update',
  uploadPictureProfile: '/users/profile/upload-picture/',
  getPictureProfile: '/users/profile/get-picture',

  //address
  getAddressOfUserById: '/users/address/by-user',
  postAddressOfUserById: '/users/address/add',
  updateAddressOfUserById: '/users/address/update',
  deleteAddressOfUserById: '/users/address/delete',

  //rating
  getRatingOfProduct: '/rating',
  postCommentAndRating: '/rating',

  //verification code
  sendVerificationCode: '/users/send-verification-code',
  enterVerificationCode: '/users/activate-user',
  changePassword: '/users/change-password',

  //search product name

  searchProductName: '/product/search-product-by-text',

  //manage order
  getOrderBySeller: '/seller/order/by-user',
  getOrderManageByStatus: '/seller/order/by-status',
  getAmuntUser: '/seller/order/count-user',
  changeStatusOrder: '/seller/order/update-order',

  //manage user
  getAllUser: '/seller/get-alluser',
  updateStatusUser: '/seller/update-user',
}

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Accept: 'multipart/form-data',
  },
})

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
}

export default api
