import React from "react";
import Header from "./Header";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Footer from "./Footer";
import Product from "../pages/Product/Product";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import VerificationCodeForm from "../pages/VerificationCode/VerificationCodeForm.jsx";
import Payment from "../pages/Payment/Payment";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/verificationcode" element={<VerificationCodeForm />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DefaultLayout;
