import Address from "./pages/Address/Address";
import AdminHome from "./pages/AdminHome/AdminHome";
import Cart from "./pages/Cart/Cart";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Comment from "./pages/Comment/Comment";
import NotFound from "./pages/ErrorPage/NotFound";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import Product from "./pages/Product/Product";
import ProductKinhMat from "./pages/ProductCategory/ProductKinhMat";

import ProductNhan from "./pages/ProductCategory/ProductNhan";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import PurchaseOrder from "./pages/PurchaseOder/PurchaseOrder";
import SendVerificationCode from "./pages/SendVerificationCode/SendVerificationCode";
import User from "./pages/User/User";
import VerificationCodeForm from "./pages/VerificationCode/VerificationCodeForm";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/productdetail", component: <ProductDetail /> },
  { path: "/cart", component: <Cart /> },
  { path: "/login/verificationcode", component: <VerificationCodeForm /> },
  { path: "/payment", component: <Payment /> },
  { path: "/not-found", component: <NotFound /> },
  { path: "*", component: <NotFound /> },
  { path: "/user", component: <User /> },
  { path: "/user/address", component: <Address /> },
  { path: "/user/purchase", component: <PurchaseOrder /> },
  { path: "/comment", component: <Comment /> },
  { path: "/product/đongho", component: <Product /> },
  { path: "/product/nhancuoi", component: <ProductNhan /> },
  { path: "/product/kinhmat", component: <ProductKinhMat /> },
  { path: "/product/lactay", component: <Product /> },
  { path: "/product/vongco", component: <ProductNhan /> },
  { path: "/product/trangsucmuahe", component: <ProductKinhMat /> },
  { path: "/login/sendverificationcode", component: <SendVerificationCode /> },
  { path: "/login/changepassword", component: <ChangePassword /> },
];

export const routesAdmin = [{ path: "/", component: <AdminHome /> }];

export default routes;
