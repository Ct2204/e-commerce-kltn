import React from "react";
import "./Login.css";
import { FaFacebookF, FaGooglePlusG,FaLinkedinIn } from "react-icons/fa";


const Login = () => {
  

  const signUp =() => {
    const container = document.getElementById("container");
    container.classList.add('right-panel-active');
  }
  const signIn =() => {
    const container = document.getElementById("container");
    container.classList.remove('right-panel-active');
  }
  

 
  return (
    <>
     <h2 className="h2-login my-3">Sign in/up Form</h2>
<div className="wrapper-container">
   
    <div className="container1 wrapper-body" id="container">
      <div className="form-container1 sign-up-container1">
        <form action="#" className="form-login">
          <h1 className="h1-login">Create Account</h1>
          <div className="social-container1">
            <a href="#" className="social a-login">
              <FaFacebookF/>
            </a>
            <a href="#" className="social a-login">
              <FaGooglePlusG/>
            </a>
            <a href="#" className="social a-login">
              <FaLinkedinIn/>
            </a>
          </div>
          <span className="span-login">or use your email htmlFor registration</span>
          <input className="input-login" type="text" placeHolder="Name" />
          <input className="input-login" type="text" placeHolder="Name" />
          <input className="input-login" type="email" placeHolder="Email" />
          <input className="input-login" type="password" placeHolder="Password" />
          <button className="button-login">Sign Up</button>
        </form>
      </div>
      <div className="form-container1 sign-in-container1">
        <form action="#" className="wrapper-form form-login">
          <h1 className="h1-login">Sign in</h1>
          <div className="social-container1">
            <a href="#" className="social a-login">
              <FaFacebookF/>
            </a>
            <a href="#" className="social a-login">
              <FaGooglePlusG/>
            </a>
            <a href="#" className="social a-login">
              <FaLinkedinIn/>
            </a>
          </div>
          <span className="span-login">or use your account</span>
          <input className="input-login" type="email" placeHolder="Email" />
          <input className="input-login" type="password" placeHolder="Password" />
          <a href="#" className="a-login">Forgot your password?</a>
          <button className="button-login">Sign In</button>
        </form>
      </div>
      <div className="overlay-container1">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="h1-login">Welcome Back!</h1>
            <p className="p-login">
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost button-login" id="signIn" onClick={signIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="h1-login">Hello, Friend!</h1>
            <p className="p-login">Enter your personal details and start journey with us</p>
            <button className="ghost button-login" id="signUp" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
