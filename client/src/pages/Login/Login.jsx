import React from "react";
import "./Login.css";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { login, register } from "../../services/UserService";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { log } from "../../store/reducers/auth";

const Login = (props) => {
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };
  const signIn = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  //Login
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  //Register
  const fullNameRef = React.useRef();
  const emailRegisterRef = React.useRef();
  const passwordRegisterRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const responseData = await login(email, password);

    if (responseData.code === 200) {
      setMessage(responseData.message);
      dispatch(
        log({
          token: responseData.data.access_token,
          userInfo: responseData.data,
        })
      );
      navigate("/dashboard");
    } else {
      setMessage(responseData.message);
    }
    console.log(responseData);
  };

  const formRegisterSubmitHandler = async (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const email = emailRegisterRef.current.value;
    const password = passwordRegisterRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const responseData = await register(
      fullName,
      email,
      password,
      confirmPassword
    );

    if (responseData.code === 200) {
      setMessage(responseData.message);
      navigate("/home");
    } else {
      setMessage(responseData.message);
    }
  };

  return (
    <>
      <h2 className="h2-login my-3">Sign in/up Form</h2>
      <div className="wrapper-container p-5">
        <div className="container1 wrapper-body" id="container">
          <div className="form-container1 sign-up-container1">
            <form
              onSubmit={formRegisterSubmitHandler}
              action="#"
              className="form-login"
            >
              <p className="h1-login">Create Account</p>
              <div className="social-container1">
                <a href="#" className="social a-login">
                  <FaFacebookF />
                </a>
                <a href="#" className="social a-login">
                  <FaGooglePlusG />
                </a>
                <a href="#" className="social a-login">
                  <FaLinkedinIn />
                </a>
              </div>

              <span className="span-login">{message}</span>
              <Input
                inputRef={fullNameRef}
                className="input-login"
                type="text"
                maxLength="50"
                placeholder="Full name"
              />
              <Input
                inputRef={emailRegisterRef}
                classhame="input-login"
                type="email"
                maxLength="50"
                placeholder="Email"
              />

              <Input
                inputRef={passwordRegisterRef}
                className="input-login"
                type="password"
                maxLength="50"
                placeholder="Password"
              />
              <Input
                className="input-login"
                maxLength="50"
                type="password"
                inputRef={confirmPasswordRef}
                placeholder="Confirm Password"
              />

              <button type="submit" className="button-login">
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container1 sign-in-container1">
            <form
              onSubmit={formSubmitHandler}
              action="#"
              className="wrapper-form form-login"
            >
              <h1 className="h1-login">Sign in</h1>
              <div className="social-container1">
                <a href="#" className="social a-login">
                  <FaFacebookF />
                </a>
                <a href="#" className="social a-login">
                  <FaGooglePlusG />
                </a>
                <a href="#" className="social a-login">
                  <FaLinkedinIn />
                </a>
              </div>
              <span className="span-login">{message}</span>
              <Input
                inputRef={emailRef}
                id="txtEmail"
                type="email"
                maxLength="50"
                placeholder="Email"
              />
              <Input
                inputRef={passwordRef}
                id="txtPassword"
                type="password"
                maxLength="100"
                placeholder="Password"
              />
              <a href="#" className="a-login">
                Forgot your password?
              </a>
              <button type="submit" className="button-login">
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container1">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1-login">Welcome Back!</h1>
                <p className="p-login">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost button-login"
                  id="signIn"
                  onClick={signIn}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1-login">Hello, Friend!</h1>
                <p className="p-login">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost button-login "
                  id="signUp"
                  onClick={signUp}
                >
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
