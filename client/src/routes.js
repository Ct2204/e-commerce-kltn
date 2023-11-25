import AdminHome from "./pages/AdminHome/AdminHome";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/ErrorPage/NotFound";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import VerificationCodeForm from "./pages/VerificationCode/VerificationCodeForm";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/productdetail", component: <ProductDetail /> },
  { path: "/cart", component: <Cart /> },
  { path: "/verificationcode", component: <VerificationCodeForm /> },
  { path: "/payment", component: <Payment /> },
  { path: "/not-found", component: <NotFound /> },
  { path: "*", component: <NotFound /> },
];

export const routesAdmin = [{ path: "/", component: <AdminHome /> }];

export default routes;