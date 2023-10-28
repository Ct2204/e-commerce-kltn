import React from "react";
import {CiMail} from 'react-icons/ci';
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGooglePlusSquare} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'








const Footer = () => {
  return (
    <div className="mainFooter  has-toolbar bg-dark text-light">
      <div className="footer-newsletter">
        <div className="container-fluid">
          <div className="row my-5 pt-4">
            <div className="col text-start">
              <div className="newsletter-title d-inline-block mx-3">
                <h3 className="">Đăng ký nhận tin</h3>
              </div>
              <div className="newsletter-content newsletter-form d-inline-block rounded">
                <form
                  acceptCharset="UTF-8"
                  action="/account/contact"
                  className="contact-form"
                  method="post"
                >
                  <div className="form-group input-group">
                    <div className="bg-light d-flex justify-contents-between align-items-center" >
                      <CiMail className="bg-dark"/>
                        <input
                        style={{width:"290px", height: "20px"}}
                        required=""
                        type="email"
                        name="contact[email]"
                        className="form-control bg-light "
                        id="newsletter-email"
                        pattern="^(.)+@[A-Za-z0-9]([A-Za-z0-9.\-]*[A-Za-z0-9])?\.[A-Za-z]{1,13}$"
                        placeHolder="Nhập email của bạn"
                        aria-label="Email Address"
                        />
                    </div>
                    <div className="input-group-btn mx-3">
                      <button
                        type="submit"
                        className="button dark cta-submitform newsletter-btn mt-1"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col text-end">
              <div className="newsletter-title d-inline-block">
                <h3>Kết nối với chúng tôi</h3>
              </div>
              <div className="newsletter-content d-inline-block m-1">
                <ul className="footerNav-social list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                    <FaFacebook className="mb-2" style={{ color: "white", width: '20px' }} />
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
                      <AiFillTwitterCircle className="mb-2" style={{ color: "white", width: '20px' }}  />
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
                      <AiOutlineInstagram className="mb-2" style={{ color: "white", width: '20px' }}  />
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
                    <AiFillGooglePlusSquare className="mb-2" style={{ color: "white", width: '20px' }}  />
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
                    <AiOutlineYoutube className="mb-2" style={{ color: "white", width: '20px' }}  />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-expand-collapsed ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4 className="title-footer">Về The Swan</h4>
                <div className="content-footer block-collapse row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <p>
                      Với các giải pháp công nghệ tốt nhất, Haravan là tất cả
                      những gì bạn cần để xây dựng thương hiệu online, thành
                      công trong bán lẻ và marketing đột phá.
                    </p>
                    <div className="address-footer">
                      <ul className="list-unstyled ">
                        <li className="contact-1">
                        <FaMapMarkerAlt className="mb-2" style={{ color: "white", width: '40px' }}  />
                          Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành,
                          phường 15, quận 11, Tp. Hồ Chí Minh.
                        </li>
                        <li className="contact-2">
                    <BsFillTelephoneFill className="mb-2" style={{ color: "white", width: '40px' }}  />
                          
                          1900.000.XXX
                        </li>
                        <li className="contact-4">
                    <BiLogoGmail className="mb-2" style={{ color: "white", width: '40px' }}  />
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
                        >
                        
                        </a>
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
                    <div className="footer-payment">
                      <div className="payment-title">Phương thức thanh toán</div>
                      <ul className="payment-icon list-unstyled list-inline ">
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
                <h4 className="title-footer">Hỗ trợ khách hàng</h4>
                <div className="content-footer block-collapse">
                  <ul className="footerNav-link text-secondary">
                    <li className="item  ">
                      <a className="text-decoration-none text-secondary" href="/collections/onsale" title="Sản phẩm khuyến mãi">
                        Sản phẩm khuyến mãi
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="/collections/hot-products"
                        title="Sản phẩm nổi bật"
                      >
                        Sản phẩm nổi bật
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/collections/all" title="Tất cả sản phẩm">
                        Tất cả sản phẩm
                      </a>
                    </li>
                  </ul>
                  <div className="footer-shipment">
                    <div className="shipment-title">Phương thức vận chuyển</div>
                    <ul className="shipment-icon list-unstyled list-inline">
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
                <h4 className="title-footer">Liên kết</h4>
                <div className="content-footer block-collapse">
                  <ul className="footerNav-link text-secondary">
                    <li className="item ">
                      <a className="text-decoration-none text-secondary" href="/" title="Trang chủ">
                        Trang chủ
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/collections/all" title="Sản phẩm">
                        Sản phẩm
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="/products/mayfair-rose-gold"
                        title="Trang sản phẩm"
                      >
                        Trang sản phẩm
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/pages/about-us" title="Giới thiệu">
                        Giới thiệu
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/blogs/news" title="Tin tức">
                        Tin tức
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/pages/about-us" title="Trang nội dung">
                        Trang nội dung
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="/pages/about-us/?view=landing-page-01"
                        title="Landing page"
                      >
                        Landing page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4 className="title-footer">Chính sách</h4>
                <div className="content-footer block-collapse">
                  <ul className="Nav-link text-secondary">
                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/search" title="Tìm kiếm">
                        Tìm kiếm
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/pages/about-us" title="Giới thiệu">
                        Giới thiệu
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="/pages/chinh-sach-doi-tra"
                        title="Chính sách đổi trả"
                      >
                        Chính sách đổi trả
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="/pages/chinh-sach-bao-mat"
                        title="Chính sách bảo mật"
                      >
                        Chính sách bảo mật
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="/pages/dieu-khoan-dich-vu"
                        title="Điều khoản dịch vụ"
                      >
                        Điều khoản dịch vụ
                      </a>
                    </li>

                    <li className="item">
                      <a className="text-decoration-none text-secondary" href="/pages/lien-he" title="Liên hệ">
                        Liên hệ
                      </a>
                    </li>

                    <li className="item">
                      <a
                      className="text-decoration-none text-secondary"
                        href="https://the-swan.myharavan.com/pages/cau-hoi-thuong-gap/?view=faqs"
                        title="FAQs - Câu hỏi thường gặp"
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
