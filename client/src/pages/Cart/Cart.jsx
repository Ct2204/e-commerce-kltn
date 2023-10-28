import React from "react";
import "./Cart.css";
import { BsSearch } from "react-icons/bs";
import ProductCart from "../../components/ProductCart";

const Cart = (props) => {
  return (
    <>
      <div className="container-fuild px-2 pt-3 nav-border">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="text-decoration-none text-body" href="#">
                Trang chủ
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-decoration-none text-body" href="#">
                Giỏ hàng
              </a>
            </li>
            <li className="breadcrumb-item" aria-current="page"></li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="d-flex justify-content-between mt-5 cart-title">
                <div className="d-flex align-items-center justify-content-center">
                  <h1 className="text-cart">Giỏ hàng của bạn</h1>
                </div>
                <p className="my-2 d-flex align-items-center justify-content-center">
                  Bạn cần mua thêm <span className="price">3,000,000₫</span> để
                  được <span className="free-ship">miễn phí vận chuyển</span>
                </p>
              </div>
              <div className="info-image">
                <img
                  style={{ width: "100%", height: "70%" }}
                  data-src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=45"
                  src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=45"
                  className=""
                  alt="Giỏ hàng của bạn đang trống"
                />
              </div>
              <div className="info-text">
                <p className="text-center">
                  Chưa có sản phẩm trong giỏ hàng...
                </p>
                <p className="text-center">
                  Bạn có thể quay về{" "}
                  <a href="https://the-swan.myharavan.com">trang chủ</a> hoặc
                  nhập từ khoá sản phẩm bạn cần tìm ở đây:
                </p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeHolder="Tìm kiếm sản phẩm..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <BsSearch />
                </button>
              </div>
              <div>
                <h2 className="collectionCart-title">
                  <a
                    className="text-decoration-none text-body"
                    href="/collections/trang-suc"
                  >
                    Có thể bạn sẽ thích
                  </a>
                </h2>
              </div>
              <div className="row">
                <div className="col">
                  <ProductCart
                    title="Cài áo đính đá cao cấp Trâm Hoa"
                    imageSrc="https://product.hstatic.net/200000593853/product/ct-5_0853b5cf37e140088c1091b1acac86f5_478f0a5a26ab4e54b8044c27cca29332_21e89fefcbc644b98573efe920bd2857_master.jpg"
                    imageSrc1="https://product.hstatic.net/200000593853/product/ct-6_a200e5c1fb144c01a6189e3d22745cfd_5adfffc5d9b24f85bd404406eaa46b83_f67b64415a1b4b6cb4054646a86e1b0e_master.jpg"
                    price="Liên hệ báo giá"
                  />
                </div>
                <div className="col">
                  <ProductCart
                    title="Cài áo đính đá cao cấp Trâm Hoa"
                    imageSrc="https://product.hstatic.net/200000593853/product/ct-5_0853b5cf37e140088c1091b1acac86f5_478f0a5a26ab4e54b8044c27cca29332_21e89fefcbc644b98573efe920bd2857_master.jpg"
                    imageSrc1="https://product.hstatic.net/200000593853/product/ct-6_a200e5c1fb144c01a6189e3d22745cfd_5adfffc5d9b24f85bd404406eaa46b83_f67b64415a1b4b6cb4054646a86e1b0e_master.jpg"
                    price="Liên hệ báo giá"
                  />
                </div>
                <div className="col">
                  <ProductCart
                    title="Cài áo đính đá cao cấp Trâm Hoa"
                    imageSrc="https://product.hstatic.net/200000593853/product/ct-5_0853b5cf37e140088c1091b1acac86f5_478f0a5a26ab4e54b8044c27cca29332_21e89fefcbc644b98573efe920bd2857_master.jpg"
                    imageSrc1="https://product.hstatic.net/200000593853/product/ct-6_a200e5c1fb144c01a6189e3d22745cfd_5adfffc5d9b24f85bd404406eaa46b83_f67b64415a1b4b6cb4054646a86e1b0e_master.jpg"
                    price="Liên hệ báo giá"
                  />
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="order-summary-block mt-5">
                <h2 className="summary-title">Thông tin đơn hàng</h2>
                <div className="summary-time summary-picktime">
                  <div className="summary-time__row d-flex justify-content-between">
                    <div className="boxtime-title">
                      <p className="txt-title">Thời gian giao hàng</p>
                      <p className="txt-time ">
                        Chọn thời gian
                      </p>
                    </div>
                    <div
                      class="boxtime-radio"
                      id="picktime_radio"
                      data-time-start=""
                      data-time-end=""
                    >
                      <div className="radio-item">
                        <input
                          class="input-radio"
                          type="radio"
                          name="timeRadios"
                          id="timeRadios-1"
                          value="timeNow"
                        />
                        <label class="label-radio" htmlFor="timeRadios-1">
                          Giao khi có hàng
                        </label>
                      </div>
                      <div className="radio-item mt-3">
                        <input
                          class="input-radio"
                          type="radio"
                          name="timeRadios"
                          id="timeRadios-2"
                          value="timeDate"
                        />
                        <label class="label-radio" htmlFor="timeRadios-2">
                          Chọn thời gian
                        </label>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="summary-total d-flex justify-content-between">
                  <p>
                    Tổng tiền:
                  </p>
                  <p>0đ</p>
                </div>
                <div className="summary-action">
                  <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                  <p>
                    Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                  </p>{" "}
                  <div
                    class="summary-alert alert alert-danger "
                    style={{display:"block"}}
                  >
                    Giỏ hàng của bạn hiện chưa đạt mức tối thiểu để thanh toán.
                  </div>
                </div>
                <div className="summary-button ">
                  <a
                    id="btnCart-checkout"
                    className="checkout-btn btnred disabled text-decoration-none text-white "
                    data-price-min="400000"
                    data-price-total="0"
                    href="#"
                  >
                    THANH TOÁN{" "}
                  </a>
                </div>
              </div>
              <div className="summary-warning alert-order">						
									<p class="textmr"><strong>Chính sách mua hàng</strong>:</p>
									<p>Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu <strong>400.000₫ </strong> trở lên.</p>
								</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
