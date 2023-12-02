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
    <div className="mainFooter  has-toolbar bg-dark text-light"
      style={{backgroundColor:"#2a2a2a"} }>
      
      
      <div className="footer-newsletter"
        style={{borderBottom:"0.5px solid silver"}}>
        <div className="container-fluid">
          <div className="row my-5 pt-4">
            
            
            <div className="col text-start">
              <div className="newsletter-title d-inline-block mx-3">
                <h3
                  style={{padding: "0",
                    margin: "0",
                    position: "relative",
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#fffffff"}}
                  className="">Đăng ký nhận tin</h3>
              </div>
              <div className="newsletter-content newsletter-form d-inline-block rounded">
                <form
                  acceptCharset="UTF-8"
                  action="/account/contact"
                  className="contact-form"
                  method="post"
                >
                  <div className="form-group input-group">
                    <div className="bg-light d-flex justify-contents-between align-items-center"
                      style={{borderRadius:"10px"} }>
                     
                        <input
                        style={{width:"350px", height: "50px"}}
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
                        style={{height:'50px',width:"150px",paddingTop:"10px",borderRadius:'5px'}}
                        className="button dark cta-submitform newsletter-btn mt-1"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>


            <div className="col"
              style={{paddingLeft:"50px"}}>
              <div className="newsletter-title d-inline-block"
                  
              >
                <h3 style={{padding: "0",
                    margin: "0",
                    position: "relative",
                    fontSize: "30px",
                    fontWeight: "700",
                  color: "#fffffff"
                }}>Kết nối với chúng tôi</h3>
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
                        <FaFacebook className="mb-2"
                          style={{ color: "white", width: '40px', height: "40px", margin: "4px" }} />
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
                        <AiFillTwitterCircle className="mb-2"
                          style={{ color: "white", width: '40px', height: "40px", margin: "4px" }} />
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
                        <AiOutlineInstagram className="mb-2"
                          style={{ color: "white", width: '40px', height: "40px", margin: "4px" }} />
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
                        <AiFillGooglePlusSquare className="mb-2"
                          style={{ color: "white", width: '40px', height: "40px", margin: "4px" }} />
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
                        <AiOutlineYoutube className="mb-2"
                          style={{ color: "white", width: '40px', height: "40px", margin: "4px" }} />
                    </a>
                  </li>
                </ul>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>



      <div className="footer-container"
        style={{marginTop:"50px",marginLeft:"20px"}}
        >
        <div className="footer-expand-collapsed ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4 className="title-footer"
                  style={{padding: "0",
                  margin: "0",
                  position: "relative",
                  fontSize: "30px",
                  fontWeight: "700",
                color: "#fffffff"
              }}
                >Về The Swan</h4>
                <div className="content-footer block-collapse row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <p style={{
                      color: "#aaaaaa",
                      lineHeight: '1.45',
                      fontSize: '18px',
                      fontFamily: "Tinos, sans-serif",
                      margin:"30px 10px"
                    
                    }}> 
                      Với các giải pháp công nghệ tốt nhất, Haravan là tất cả
                      những gì bạn cần để xây dựng thương hiệu online, thành
                      công trong bán lẻ và marketing đột phá.
                    </p>
                    <div className="address-footer">
                      <ul className="list-unstyled ">
                        <li className="contact-1"
                          style={{
                            color: "#aaaaaa",
                            lineHeight: '1.45',
                            fontSize: '18px',
                            fontFamily: "Tinos, sans-serif",
                          
                          }}>
                        <FaMapMarkerAlt className="mb-2" style={{width:"40px",height:"30px"}}  />
                          Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành,
                          phường 15, quận 11, Tp. Hồ Chí Minh.
                        </li>
                        <li className="contact-2"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                          margin:"10px 10px"
                        
                        }}
                        >
                    <BsFillTelephoneFill className="mb-2" style={{  width: '40px',height:'30px' }}  />
                          
                          1900.000.XXX
                        </li>
                        <li className="contact-4"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                          margin:"10px 10px"
                        
                        }}>
                          
                    <BiLogoGmail className="mb-2" style={{  width: '40px',height:'30px' }}  />
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
                    <div className="footer-payment"
                      style={{}}>
                      <div className="payment-title"
                        style={{padding: "0",
                        margin: "0",
                        position: "relative",
                        fontSize: "30px",
                        fontWeight: "700",
                      color: "#fffffff"
                    }}
                      >Phương thức thanh toán</div>
                      <ul
                        className="payment-icon list-unstyled list-inline "
                        style={{margin:"10px 10px"}}
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
                <h4 className="title-footer"
                style={{padding: "0",
                margin: "0",
                position: "relative",
                fontSize: "30px",
                fontWeight: "700",
              color: "#fffffff"
            }}
                >Hỗ trợ khách hàng</h4>
                <div className="content-footer block-collapse"
                  style={{margin:"30px 10px"}}
                >
                  <ul
                    className="footerNav-link"
                    
                  >

                    <li className="item  "
                      style={{             
                        margin: "20px 10px",                  
                      }}
                    
                    >
                      <a className="text-decoration-none "
                        href="/collections/onsale"
                        title="Sản phẩm khuyến mãi"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",        
                        }}
  
                      >
                        Sản phẩm khuyến mãi
                      </a>
                    </li>

                    <li className="item"
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
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                          margin:"20px 10px"
                        
                        }}
                      >
                        Sản phẩm nổi bật
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none "
                        href="/collections/all"
                        title="Tất cả sản phẩm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                          margin:"20px 10px"
                        
                        }}
                      >
                        Tất cả sản phẩm
                      </a>
                    </li>
                  </ul>
                  <div className="footer-shipment">
                    <div className="shipment-title"
                    style={{padding: "0",
                    margin: "0",
                    position: "relative",
                    fontSize: "30px",
                    fontWeight: "700",
                  color: "#fffffff"
                }}
                    >Phương thức vận chuyển</div>
                    <ul className="shipment-icon list-unstyled list-inline"
                    style={{             
                      margin: "30px 10px",                  
                    }}>
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
                <h4 className="title-footer"
                  style={{padding: "0",
                  margin: "0",
                  position: "relative",
                  fontSize: "30px",
                  fontWeight: "700",
                color: "#fffffff"
              }}
                >Liên kết</h4>
                <div className="content-footer block-collapse" style={{             
                        margin: "30px 10px",                  
                      }}>
                  <ul className="footerNav-link ">
                    <li className="item " style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none "
                        href="/"
                        title="Trang chủ"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Trang chủ
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none "
                        href="/collections/all"
                        title="Sản phẩm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Sản phẩm
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                      className="text-decoration-none "
                        href="/products/mayfair-rose-gold"
                        title="Trang sản phẩm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Trang sản phẩm
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none "
                        href="/pages/about-us"
                        title="Giới thiệu"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Giới thiệu
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none "
                        href="/blogs/news"
                        title="Tin tức"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Tin tức
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none "
                        href="/pages/about-us"
                        title="Trang nội dung"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        }}
                      >
                        Trang nội dung
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                      className="text-decoration-none "
                        href="/pages/about-us/?view=landing-page-01"
                        title="Landing page"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Landing page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-12 widget-footer">
                <h4 className="title-footer"
                  style={{padding: "0",
                  margin: "0",
                  position: "relative",
                  fontSize: "30px",
                  fontWeight: "700",
                color: "#fffffff"
              }}
                >Chính sách</h4>
                <div className="content-footer block-collapse" style={{             
                        margin: "30px 10px",                  
                      }}>
                  <ul className="Nav-link ">
                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a className="text-decoration-none "
                        href="/search"
                        title="Tìm kiếm"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Tìm kiếm
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a className="text-decoration-none "
                        href="/pages/about-us"
                        title="Giới thiệu"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Giới thiệu
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                      className="text-decoration-none"
                        href="/pages/chinh-sach-doi-tra"
                        title="Chính sách đổi trả"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Chính sách đổi trả
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                      className="text-decoration-none"
                        href="/pages/chinh-sach-bao-mat"
                        title="Chính sách bảo mật"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Chính sách bảo mật
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                        className="text-decoration-none"
                        href="/pages/dieu-khoan-dich-vu"
                        title="Điều khoản dịch vụ"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Điều khoản dịch vụ
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a className="text-decoration-none "
                        href="/pages/lien-he"
                        title="Liên hệ"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
                        }}
                      >
                        Liên hệ
                      </a>
                    </li>

                    <li className="item" style={{             
                        margin: "20px 10px",                  
                      }}>
                      <a
                      className="text-decoration-none "
                        href="https://the-swan.myharavan.com/pages/cau-hoi-thuong-gap/?view=faqs"
                        title="FAQs - Câu hỏi thường gặp"
                        style={{
                          color: "#aaaaaa",
                          lineHeight: '1.45',
                          fontSize: '18px',
                          fontFamily: "Tinos, sans-serif",
                        
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
