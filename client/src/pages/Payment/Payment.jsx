import React, { useEffect, useState } from "react";
import "./Payment.css";

const Payment = (props) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Lấy thông tin giỏ hàng từ Local Storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const result = {};
  cart.forEach((item) => {
    if (!result[item.id]) {
      result[item.id] = { ...item };
    } else {
      result[item.id].quantity += item.quantity;
      result[item.id].price += item.price;
    }
  });
  const mergedCart = Object.values(result);
  console.log(mergedCart);
  const totalPrice = mergedCart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  const totalProduct = mergedCart.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
  return (
    <>
      <div className="address-receive">
        <div className="vtrWey"></div>
        <div className="payment-name">
          <div>Địa chỉ nhận hàng</div>
          <div>Trần Văn Thiên</div>
        </div>

        <div className="product-cart mt-5">
          <div className="d-flex mt-5">
            <div class="jNp+ZB ktatB-">
              <h2 class="_6HCfS6">Sản phẩm</h2>
            </div>
            <div class="jNp+ZB _04sLFc "></div>
            <div class="jNp+ZB text-end">Đơn giá</div>
            <div class="jNp+ZB">Số lượng</div>
            <div class="jNp+ZB LBqTli text-end">Thành tiền</div>
          </div>
          {mergedCart.map((product, idx) => (
            <div class="_2OGC7L iyDtv7">
              <div class="h3ONzh EOqcX3">
                <img
                  class="rTOisL"
                  alt="product image"
                  src={product.image}
                  width="40"
                  height="40"
                />
                <span class="oEI3Ln">
                  <span class="gHbVhc">{product.title}</span>
                </span>
              </div>
              <div class="h3ONzh Le31ox">
                <span class="dVLwMH">Loại: Đen,S</span>
              </div>
              <div class="h3ONzh1 text-center d-flex align-items-center justify-content-center ">
                ₫69.000
              </div>
              <div class="h3ONzh2 d-flex align-items-center justify-content-center">
                {product.quantity}
              </div>
              <div class="h3ONzh3 fHRPUO text-end">{product.price}</div>
            </div>
          ))}
          <div class="ULZMSb">
            <div class="bwwaGp iL6wsx -snVIl">
              Tổng số tiền ({totalProduct} sản phẩm):
            </div>
            <div class="bwwaGp R3a05f -snVIl kMV1h4">₫{totalPrice}</div>
          </div>
        </div>

        <div class="checkout-payment-method-view__current checkout-payment-setting product-cart mt-5">
          <div class="checkout-payment-method-view__current-title">
            Phương thức thanh toán
          </div>
          <div class="checkout-payment-setting__payment-methods-tab">
            <div role="radiogroup">
              <span>
                <button
                  class="product-variation product-variation--selected"
                  tabindex="0"
                  role="radio"
                  aria-label="Ví ShopeePay"
                  aria-disabled="false"
                  aria-checked="true"
                >
                  Ví ShopeePay
                  <div class="product-variation__tick">
                    <svg
                      enable-background="new 0 0 12 12"
                      viewBox="0 0 12 12"
                      x="0"
                      y="0"
                      class="shopee-svg-icon icon-tick-bold"
                    >
                      <g>
                        <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </span>
              <span>
                <button
                  class="product-variation product-variation--disabled"
                  tabindex="0"
                  role="radio"
                  aria-label="Apple Pay"
                  aria-disabled="true"
                  aria-checked="false"
                >
                  Apple Pay
                </button>
              </span>
              <span>
                <button
                  class="product-variation product-variation--disabled"
                  tabindex="0"
                  role="radio"
                  aria-label="Thẻ Tín dụng/Ghi nợ"
                  aria-disabled="true"
                  aria-checked="false"
                >
                  Thẻ Tín dụng/Ghi nợ
                </button>
              </span>
              <span>
                <button
                  class="product-variation"
                  tabindex="0"
                  role="radio"
                  aria-label="Thẻ nội địa NAPAS"
                  aria-disabled="false"
                  aria-checked="false"
                >
                  Thẻ nội địa NAPAS
                </button>
              </span>
              <span>
                <button
                  class="product-variation"
                  tabindex="0"
                  role="radio"
                  aria-label="Thanh toán khi nhận hàng"
                  aria-disabled="false"
                  aria-checked="false"
                >
                  Thanh toán khi nhận hàng
                </button>
              </span>
            </div>
            <div aria-live="polite"></div>
          </div>
        </div>
        <div class="KQyCj0" aria-live="polite">
          <h2 class="a11y-visually-hidden">Tổng thanh toán:</h2>
          <h3 class="bwwaGp iL6wsx BcITa9">Tổng tiền hàng</h3>
          <div class="bwwaGp R3a05f BcITa9">₫{totalPrice}</div>
          <h3 class="bwwaGp iL6wsx RY9Grr">Phí vận chuyển</h3>
          <div class="bwwaGp R3a05f RY9Grr">₫28.800</div>
          <h3 class="bwwaGp iL6wsx _5y8V6a">Tổng thanh toán:</h3>
          <div class="bwwaGp l2Nmnm R3a05f _5y8V6a">₫77.800</div>
          <div class="uTFqRt">
            <div class="k4VpYA">
              <div class="C-NSr-">
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
                <a
                  href="https://help.shopee.vn/portal/article/77242"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Điều khoản Shopee
                </a>
              </div>
            </div>
            <button class="stardust-button stardust-button--primary stardust-button--large apLZEG N7Du4X">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
