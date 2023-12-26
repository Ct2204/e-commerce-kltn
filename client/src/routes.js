import Address from './pages/Address/Address'
import AddProuct from './pages/AdminHome/AddProduct.jsx'
import AdminHome from './pages/AdminHome/AdminHome'
import Cart from './pages/Cart/Cart'

import ChangePassword from './pages/ChangePassword/ChangePassword'

import Comment from './pages/Comment/Comment'
import Content from './pages/Content/Content.jsx'
import NotFound from './pages/ErrorPage/NotFound'
import Home from './pages/Home/Home'
import Introduce from './pages/Introduce/Introduce.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import News from './pages/News/News.jsx'
import Payment from './pages/Payment/Payment'
import Product from './pages/Product/Product'
import ProductKinhMat from './pages/ProductCategory/ProductKinhMat'

import ProductNhan from './pages/ProductCategory/ProductNhan'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Profile from './pages/Profile/Profile.jsx'
import PurchaseOrder from './pages/PurchaseOder/PurchaseOrder'

import SendVerificationCode from './pages/SendVerificationCode/SendVerificationCode'
import UploadImage from './pages/UploadImage/UploadImage.js'

import User from './pages/User/User'
import VerificationCodeForm from './pages/VerificationCode/VerificationCodeForm'

const routes = [
  { path: '/', component: <Home /> },
  { path: '/home', component: <Home /> },
  { path: '/productdetail', component: <ProductDetail /> },
  { path: '/cart', component: <Cart /> },
  { path: '/login/verificationcode', component: <VerificationCodeForm /> },
  { path: '/payment', component: <Payment /> },
  { path: '/not-found', component: <NotFound /> },
  { path: '*', component: <NotFound /> },
  { path: '/user', component: <User /> },
  { path: '/user/address', component: <Address /> },
  { path: '/user/purchase', component: <PurchaseOrder /> },
  { path: '/comment', component: <Comment /> },
  { path: '/product/đongho', component: <Product /> },
  { path: '/product/nhancuoi', component: <ProductNhan /> },
  { path: '/product/kinhmat', component: <ProductKinhMat /> },
  { path: '/product/lactay', component: <Product /> },
  { path: '/product/vongco', component: <ProductNhan /> },
  { path: '/product/trangsucmuahe', component: <ProductKinhMat /> },
  { path: '/user/profile', component: <Profile /> },
  { path: '/seller/addproduct', component: <AddProuct /> },

  { path: '/login/sendverificationcode', component: <SendVerificationCode /> },
  { path: '/login/changepassword', component: <ChangePassword /> },
  { path: '/introduce', component: <Introduce /> },
  { path: '/news', component: <News /> },
  { path: '/landingpage', component: <LandingPage /> },
  { path: '/content', component: <Content /> },
]

export const routesAdmin = [
  {
    path: '/addproduct',
    component: <AddProuct />,
  },
  {
    path: '/',
    component: <AdminHome />,
  },
]

export default routes
