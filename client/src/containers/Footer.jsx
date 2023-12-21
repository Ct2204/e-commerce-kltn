import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div
      className="mainFooter  has-toolbar bg-dark text-light"
      style={{ backgroundColor: "#2a2a2a", fontFamily: " Tinos, sans-serif" }}
    >
      <div
        className="footer-newsletter"
        style={{ borderBottom: "0.5px solid silver" }}
      >
        <div className="container-fluid">
          <div className="row mb-5 pt-4">
            <div className="col-7 text-start d-flex">
              <div className="newsletter-title d-inline-block mx-3">
                <h4
                  style={{
                    padding: "0",
                    margin: "0",
                    position: "relative",
                    fontFamily: "Tinos, sans-serif",
                    color: "#fffffff",
                  }}
                  className="fw-bold mt-2"
                >
                  Đăng ký nhận tin
                </h4>
              </div>
              <div className="newsletter-content newsletter-form d-inline-block rounded">
                <form
                  acceptCharset="UTF-8"
                  action="/account/contact"
                  className="contact-form"
                  method="post"
                >
                  <div className="form-group input-group d-flex">
                    <div
                      className="bg-dark d-flex justify-contents-between align-items-center"
                      style={{}}
                    >
                      <input
                        style={{
                          width: "290px",
                          height: "40px",
                          borderRadius: "20px",
                          postion: "relative",
                          paddingLeft: "50px",
                          fontSize: "14px",
                          marginBottom: "10px",
                          border: "none",
                        }}
                        placeHolder="Nhập email của bạn"
                      />
                      <span
                        class="input-group-text bg-white"
                        style={{
                          position: "absolute",
                          border: "none",
                          left: "10px",
                          top: "3px",
                        }}
                        id="basic-addon1"
                      >
                        <i class="fa-regular fa-envelope"></i>
                      </span>
                    </div>
                    <div
                      class="input-group-btn d-flex justify-content-center bg-black mx-3"
                      style={{
                        width: "145px",
                        height: "40px",
                        borderRadius: "20px",
                      }}
                    >
                      <button
                        type="submit"
                        class="bg-black text-white fw-bold"
                        style={{ border: "none" }}
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5" style={{ paddingLeft: "50px" }}>
              <div className="newsletter-title d-flex">
                <div>
                  <h4
                    className="fw-bold mt-2 mx-2"
                    style={{
                      padding: "0",
                      margin: "0",
                      position: "relative",

                      color: "#fffffff",
                    }}
                  >
                    Kết nối với chúng tôi
                  </h4>
                </div>
                <div className="newsletter-content" style={{ height: "52px" }}>
                  <ul className="footerNav-social list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener"
                        title="Facebook"
                        aria-label="Facebook"
                      >
                        <FaFacebook
                          className="mb-2"
                          style={{
                            color: "white",
                            width: "32px",
                            height: "32px",
                            margin: "4px",
                          }}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener"
                        title="Twitter"
                        aria-label="Twitter"
                      >
                        <AiFillTwitterCircle
                          className="mb-2"
                          style={{
                            color: "white",
                            width: "32px",
                            height: "32px",
                            margin: "4px",
                          }}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener"
                        title="Instagram"
                        aria-label="Instagram"
                      >
                        <AiOutlineInstagram
                          className="mb-2"
                          style={{
                            color: "white",
                            width: "32px",
                            height: "32px",
                            margin: "4px",
                          }}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener"
                        title="Google Plus"
                        aria-label="Google Plus"
                      >
                        <AiFillGooglePlusSquare
                          className="mb-2"
                          style={{
                            color: "white",
                            width: "32px",
                            height: "32px",
                            margin: "4px",
                          }}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener"
                        title="Youtube"
                        aria-label="Youtube"
                      >
                        <AiOutlineYoutube
                          className="mb-2"
                          style={{
                            color: "white",
                            width: "32px",
                            height: "32px",
                            margin: "4px",
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-container"
        style={{
          fontSize: "14px",
          fontFamily: "Tinos, sans-serif",
          marginTop: "50px",
          marginLeft: "20px",
        }}
      >
        <div className="footer-expand-collapsed ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4
                  className="title-footer fw-bold"
                  style={{
                    padding: "0",
                    margin: "0",
                    position: "relative",

                    color: "#fffffff",
                  }}
                >
                  Về The Swan
                </h4>
                <div className="content-footer block-collapse row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <p
                      style={{
                        color: "#aaaaaa",
                        lineHeight: "1.45",

                        margin: "30px 10px",
                      }}
                    >
                      Với các giải pháp công nghệ tốt nhất, Haravan là tất cả
                      những gì bạn cần để xây dựng thương hiệu online, thành
                      công trong bán lẻ và marketing đột phá.
                    </p>
                    <div className="address-footer">
                      <ul className="list-unstyled ">
                        <li
                          className="contact-1"
                          style={{
                            color: "#aaaaaa",
                            lineHeight: "1.45",
                          }}
                        >
                          <FaMapMarkerAlt
                            className="mb-2"
                            style={{ width: "40px", height: "30px" }}
                          />
                          Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành,
                          phường 15, quận 11, Tp. Hồ Chí Minh.
                        </li>
                        <li
                          className="contact-2"
                          style={{
                            color: "#aaaaaa",
                            lineHeight: "1.45",

                            margin: "10px 10px",
                          }}
                        >
                          <BsFillTelephoneFill
                            className="mb-2"
                            style={{ width: "40px", height: "30px" }}
                          />
                          1900.000.XXX
                        </li>
                        <li
                          className="contact-4"
                          style={{
                            color: "#aaaaaa",
                            lineHeight: "1.45",

                            margin: "10px 10px",
                          }}
                        >
                          <BiLogoGmail
                            className="mb-2"
                            style={{ width: "40px", height: "30px" }}
                          />
                          hi@theswan.abc
                        </li>
                      </ul>
                    </div>
                    <ul className="footerNav-social d-md-none bg-light">
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener"
                          title="Facebook"
                          aria-label="Facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener"
                          title="Twitter"
                          aria-label="Twitter"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener"
                          title="Instagram"
                          aria-label="Instagram"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener"
                          title="Google Plus"
                          aria-label="Google Plus"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener"
                          title="Youtube"
                          aria-label="Youtube"
                        >
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="footer-payment" style={{}}>
                      <h4
                        className="payment-title fw-bold"
                        style={{
                          padding: "0",
                          margin: "0",
                          position: "relative",

                          color: "#fffffff",
                        }}
                      >
                        Phương thức thanh toán
                      </h4>
                      <ul
                        className="payment-icon list-unstyled list-inline "
                        style={{ margin: "10px 10px" }}
                      >
                        <li className="list-inline-item">
                          <img
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/payment_1_img.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/payment_1_img.png?v=43"
                            alt="zalo pay"
                            title="zalo pay"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/payment_2_img.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/payment_2_img.png?v=43"
                            alt="onepay"
                            title="onepay"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/payment_3_img.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/payment_3_img.png?v=43"
                            alt="vn-pay"
                            title="vn-pay"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/payment_4_img.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/payment_4_img.png?v=43"
                            alt="kredivo"
                            title="kredivo"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4
                  className="title-footer fw-bold"
                  style={{
                    padding: "0",
                    margin: "0",
                    position: "relative",

                    color: "#fffffff",
                  }}
                >
                  Hỗ trợ khách hàng
                </h4>
                <div
                  className="content-footer block-collapse"
                  style={{ margin: "30px 10px" }}
                >
                  <ul className="footerNav-link">
                    <li
                      className="item  "
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/collections/onsale"
                        title="Sản phẩm khuyến mãi"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Sản phẩm khuyến mãi
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/collections/hot-products"
                        title="Sản phẩm nổi bật"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",

                          margin: "20px 10px",
                        }}
                      >
                        Sản phẩm nổi bật
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/collections/all"
                        title="Tất cả sản phẩm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",

                          margin: "20px 10px",
                        }}
                      >
                        Tất cả sản phẩm
                      </a>
                    </li>
                  </ul>
                  <div className="footer-shipment ">
                    <h4
                      className="shipment-title fw-bold"
                      style={{
                        padding: "0",
                        margin: "0",
                        position: "relative",

                        color: "#fffffff",
                      }}
                    >
                      Phương thức vận chuyển
                    </h4>
                    <ul
                      className="shipment-icon list-unstyled list-inline"
                      style={{
                        margin: "30px 10px",
                      }}
                    >
                      <li className="list-inline-item">
                        <img
                          className=" ls-is-cached lazyloaded"
                          data-src="//theme.hstatic.net/200000593853/1001115480/14/shipment_1_img.png?v=43"
                          src="//theme.hstatic.net/200000593853/1001115480/14/shipment_1_img.png?v=43"
                          alt="ghn"
                          title="ghn"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          className=" ls-is-cached lazyloaded"
                          data-src="//theme.hstatic.net/200000593853/1001115480/14/shipment_2_img.png?v=43"
                          src="//theme.hstatic.net/200000593853/1001115480/14/shipment_2_img.png?v=43"
                          alt="ninjavan"
                          title="ninjavan"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          className=" ls-is-cached lazyloaded"
                          data-src="//theme.hstatic.net/200000593853/1001115480/14/shipment_3_img.png?v=43"
                          src="//theme.hstatic.net/200000593853/1001115480/14/shipment_3_img.png?v=43"
                          alt="ahamove"
                          title="ahamove"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          className=" ls-is-cached lazyloaded"
                          data-src="//theme.hstatic.net/200000593853/1001115480/14/shipment_4_img.png?v=43"
                          src="//theme.hstatic.net/200000593853/1001115480/14/shipment_4_img.png?v=43"
                          alt="j&amp;t"
                          title="j&amp;t"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4
                  className="title-footer fw-bold"
                  style={{
                    padding: "0",
                    margin: "0",
                    position: "relative",

                    color: "#fffffff",
                  }}
                >
                  Liên kết
                </h4>
                <div
                  className="content-footer block-collapse"
                  style={{
                    margin: "30px 10px",
                  }}
                >
                  <ul className="footerNav-link ">
                    <li
                      className="item "
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/"
                        title="Trang chủ"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Trang chủ
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/collections/all"
                        title="Sản phẩm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Sản phẩm
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/products/mayfair-rose-gold"
                        title="Trang sản phẩm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Trang sản phẩm
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/pages/about-us"
                        title="Giới thiệu"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Giới thiệu
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/blogs/news"
                        title="Tin tức"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Tin tức
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/pages/about-us"
                        title="Trang nội dung"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Trang nội dung
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/pages/about-us/?view=landing-page-01"
                        title="Landing page"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Landing page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4
                  className="title-footer fw-bold"
                  style={{
                    padding: "0",
                    margin: "0",
                    position: "relative",

                    color: "#fffffff",
                  }}
                >
                  Chính sách
                </h4>
                <div
                  className="content-footer block-collapse"
                  style={{
                    margin: "30px 10px",
                  }}
                >
                  <ul className="Nav-link ">
                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/search"
                        title="Tìm kiếm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Tìm kiếm
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/pages/about-us"
                        title="Giới thiệu"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Giới thiệu
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none"
                        href="/pages/chinh-sach-doi-tra"
                        title="Chính sách đổi trả"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Chính sách đổi trả
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none"
                        href="/pages/chinh-sach-bao-mat"
                        title="Chính sách bảo mật"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Chính sách bảo mật
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none"
                        href="/pages/dieu-khoan-dich-vu"
                        title="Điều khoản dịch vụ"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Điều khoản dịch vụ
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="/pages/lien-he"
                        title="Liên hệ"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        Liên hệ
                      </a>
                    </li>

                    <li
                      className="item"
                      style={{
                        margin: "20px 10px",
                      }}
                    >
                      <a
                        className="text-decoration-none "
                        href="https://the-swan.myharavan.com/pages/cau-hoi-thuong-gap/?view=faqs"
                        title="FAQs - Câu hỏi thường gặp"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: "1.45",
                        }}
                      >
                        FAQs - Câu hỏi thường gặp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
