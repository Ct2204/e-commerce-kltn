import "./Header.css"

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [target, setTarget] = useState(null);
  const [target1, setTarget1] = useState(null);
  const [mount, setMount] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClick1 = (event) => {
    setShow1(!show1);
    setTarget1(event.target);
  };

  const handleClose = () => setMount(false);
  const handleShow = () => setMount(true);

  return (
    <>
      <div className=" container-fluid bg-secondary text-white top-header pt-2 ">
        <div className="d-inline header-item ">
          Hotline:<strong> 1900.636.000</strong> (8h - 12h, 13h30 - 17h)
        </div>
        <div className="d-inline ">Liên hệ</div>
        <div className="d-inline float-end header-item2">
          <FaBell style={{ color: "white" }} /> Thông báo của tôi
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-1">
            <img
              src="https://theme.hstatic.net/200000593853/1001115480/14/logo.png?v=43"
              alt=""
            />
          </div>
          <div className="col-auto align-self-center">
            <ul id="main-menu" className="list-unstyled list-inline py-3 item">
              <li className="list-inline-item icon-hover">
                <Link
                  className="text-decoration-none text-body parent-menu"
                  to="/"
                >
                  Trang chủ
                </Link>{" "}
                
              
                
              </li>
              <li className="list-inline-item mx-3 product-hover">
                <Link
                  className="text-decoration-none text-body parent-product"
                  to="/product"
                >
                  Sản phẩm
                </Link>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  x="0"
                  y="0"
                  viewBox="0 0 128 128"
                >
                  <g>
                    <path d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path>
                  </g>
                </svg>
                <div
                  className="container-fuilld bg-white sub-product text-start p-4"
                  style={{ width: "50%" }}
                >
                  <div className="row d-flex flex-wrap">
                    <div className="col-lg-4">
                      <a
                        className="text-decoration-none text-body"
                        href="/collections/frontpage"
                        title="Sản phẩm mới"
                      >
                        Sản phẩm mới
                      </a>
                      <ul className="subchildmenu-item list-unstyled">
                        <li className="">
                          <a
                            className="text-decoration-none"
                            href="/collections/all"
                            title="Trang sức mùa hè"
                          >
                            Trang sức mùa hè
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="text-decoration-none"
                            href="/collections/all"
                            title="Vòng cổ"
                          >
                            Vòng cổ
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="text-decoration-none"
                            href="/"
                            title="Nhẫn cưới"
                          >
                            Nhẫn cưới
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <a
                        className="text-decoration-none text-body"
                        href="/collections/hot-products"
                        title="Sản phẩm nổi bật"
                      >
                        Sản phẩm nổi bật
                      </a>
                      <ul className="list-unstyled">
                        <li className="text-decoration-none">
                          <a
                            className="text-decoration-none"
                            href="/collections/all"
                            title="Đồng hồ"
                          >
                            Đồng hồ
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-decoration-none"
                            href="/"
                            title="Kính mát"
                          >
                            Kính mát
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-decoration-none"
                            href="/collections/all"
                            title="Lắc tay"
                          >
                            Lắc tay
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <a
                        className="text-body text-decoration-none"
                        href="/collections/onsale"
                        title="Chương trình khuyến mãi"
                      >
                        Chương trình khuyến mãi
                      </a>
                      <ul className="list-unstyled">
                        <li className="">
                          <a
                            className="text-decoration-none"
                            href="/collections/all"
                            title="Khuyến mãi tết"
                          >
                            Khuyến mãi tết
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="text-decoration-none"
                            href="/collections/all"
                            title="Giảm giá mùa đông"
                          >
                            Giảm giá mùa đông
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor list-inline-item mx-3">
                Trang sản phẩm{" "}
              </li>
              <li className="cursor list-inline-item mx-3">
                Giới thiệu{" "}
                
               
              </li>
              <li className="cursor list-inline-item mx-3">Tin tức </li>
              <li className="cursor list-inline-item mx-3">
                Trang nội dung{" "}
              
              
              </li>
              <li className="cursor list-inline-item mx-3">Landing page</li>
              <li className="cursor list-inline-item mx-3">Live stream</li>
            </ul>
          </div>
          <div className="col-2 py-3">
            <div className="row">
              <div className="col-8">
                <FiMapPin className="icon" />
                <span className="txtText">Giao hàng hoặc lấy tại</span> <br />
                <span className="txtAddress"> 182 Lê Đại Hành,... </span>
              </div>
              <div className="col-4 d-flex">
                <div>
                  <div ref={ref}>
                    <Button
                      className="bg-white border border-white"
                      onClick={handleClick}
                    >
                      <BiSearch
                        style={{
                          color: "black",
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </Button>
                    <Overlay
                      show={show}
                      target={target}
                      placement="bottom"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-contained">
                        <Popover.Header className="text-center" as="h3">
                          TÌM KIẾM
                        </Popover.Header>
                        <Popover.Body>
                          <div class="box">
                            <div className="container-1">
                              <input
                                type="search"
                                id="search"
                                placeholder="Tìm kiếm sản phẩm..."
                              />
                              <span class="icon">
                                <BiSearch />
                              </span>
                            </div>
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                </div>
                <div>
                  <div ref={ref1}>
                    <Button
                      className="bg-white border border-white"
                      onClick={handleClick1}
                    >
                      <CiUser
                        style={{
                          color: "black",
                          width: "25px",
                          height: "25px",
                        }}
                        className=""
                      />
                    </Button>
                    <Overlay
                      show={show1}
                      target={target1}
                      placement="bottom"
                      container={ref1}
                      containerPadding={20}
                    >
                      <Popover id="popover-contained">
                        <Popover.Header className="text-center bg-white">
                          <h1 className="login-account">ĐĂNG NHẬP TÀI KHOẢN</h1>
                          <h5 className="user">
                            Nhập email và mật khẩu của bạn:
                          </h5>
                        </Popover.Header>
                        <Popover.Body>
                          <div className="my-2">
                            <div className="my-2">
                              <input
                                className="mb-3"
                                style={{ width: "100%" }}
                                type="search"
                                id="search"
                                placeholder="Email..."
                              />
                              <input
                                style={{ width: "100%" }}
                                type="search"
                                id="search"
                                placeholder="Mật khẩu..."
                              />
                            </div>
                            <div className="text-center">
                              This site is protected by reCAPTCHA and the Google
                              <a
                                className="text-decoration-none"
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {"  "}Privacy Policy
                              </a>
                              {"  "}and{"  "}
                              <a
                                className="text-decoration-none"
                                href="https://policies.google.com/terms"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Terms of Service
                              </a>
                              {"  "}
                              apply.
                            </div>
                            <div
                              style={{ width: "100%", height: "45px" }}
                              className="d-grid justify-content-center align-items-center border border-dark mt-3 rounded bg-dark text-light"
                            >
                              <strong>Đăng nhập</strong>
                            </div>
                            <div className="site_account_secondary-action">
                              <p>
                                Khách hàng mới?
                                <a
                                  className="text-decoration-none text-body"
                                  href="/account/register"
                                >
                                  Tạo tài khoản
                                </a>
                              </p>
                              <p>
                                Quên mật khẩu?
                                <a
                                  className="text-decoration-none text-body"
                                  href="/account/register"
                                >
                                  Khôi phuc mật khẩu
                                </a>
                              </p>
                            </div>
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                </div>
                <div>
                  <Button
                    className="bg-white border border-white"
                    variant="primary"
                    onClick={handleShow}
                  >
                    <AiOutlineShoppingCart
                      style={{ color: "black", width: "25px", height: "25px" }}
                    />
                  </Button>
                  <Offcanvas
                    className=""
                    show={mount}
                    onHide={handleClose}
                    placement="end"
                  >
                    <Offcanvas.Header className="header-cart" closeButton>
                      <Offcanvas.Title>
                        <strong>Giỏ hàng</strong>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <div className="svgico-mini-cart">
                        <img
                          style={{ width: "100%" }}
                          data-src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=43"
                          src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=43"
                          alt="Giỏ hàng của bạn đang trống"
                        />
                        <p className="text-center">
                          Chưa có sản phẩm trong giỏ hàng...
                        </p>
                        <div className="action-link-empty text-center">
                          <a
                            href="/collections/onsale"
                            className="link-cart mx-4"
                          >
                            Trở về trang sản phẩm
                          </a>
                          <a name="link-copuon" className="link-cart">
                            Khuyến mãi dành cho bạn
                          </a>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
