import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useSelector } from "react-redux";
import { checkOutWithVnpay } from "../../services/PaymentService.js";
import { useNavigate } from "react-router-dom";

const Payment = (props) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const orderId = useSelector((state) => state.order.orderId);
  console.log("iddddddddđ", orderId);
  useEffect(() => {
    // Lấy thông tin giỏ hàng từ Local Storage
    const storedCart = JSON.parse(localStorage.getItem("cartOrder")) || [];
    setCart(storedCart);
  }, []);

  const performVnPayCheckout = async () => {
    try {
      const responseData = await checkOutWithVnpay(orderId);
      if (responseData.code === 200) {
        window.location.href = responseData.data;
      }
    } catch (error) {
      console.error("Error during VnPay checkout:", error);
    }
  };

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <>
      <div className="address-receive">
        <div className="vtrWey"></div>
        <div className="payment-address">
          <div className="payment-title">Địa chỉ nhận hàng</div>
          <div>
            <div className="payment-address-content">
              <div style={{ display: "flex", fontSize: "17px" }}>
                <p className="addressName">Lê Công Thương</p>
                <p className="addresPhone">(+84) 362002021</p>
              </div>
              <div>
                <p className="address">
                  Tân hòa, Tân Thủy, Lệ Thủy, Quảng Bình
                </p>
              </div>
              <a className="updateAddress">Thay đổi</a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="mx-2">
                  Sản phẩm
                </th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="d-flex">
                      <img
                        className="mx-2"
                        alt="product image"
                        src={product.url}
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div>
                        <p className="mt-3">{product.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="mt-3">{product.price}</div>
                  </td>
                  <td>
                    <div className="mt-3">{product.quantity}</div>
                  </td>
                  <td>
                    <div className="mt-3">
                      {product.price * product.quantity}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="checkout-payment-method-view__current checkout-payment-setting product-cart mt-5">
          <div className="checkout-payment-method-view__current-title">
            Phương thức thanh toán
          </div>
          <div className="checkout-payment-setting__payment-methods-tab">
            <div role="radiogroup">
              <span>
                <button
                  className="product-variation product-variation--selected"
                  tabindex="0"
                  role="radio"
                  aria-label="Ví ShopeePay"
                  aria-disabled="false"
                  aria-checked="true"
                >
                  Ví ShopeePay
                  <div className="product-variation__tick">
                    <svg
                      enable-background="new 0 0 12 12"
                      viewBox="0 0 12 12"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-tick-bold"
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
                  className="product-variation product-variation--disabled"
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
                  className="product-variation product-variation--disabled"
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
                  className="product-variation"
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
                  className="product-variation"
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
        <div className="KQyCj0" aria-live="polite">
          <h2 className="a11y-visually-hidden">Tổng thanh toán:</h2>
          <h3 className="bwwaGp iL6wsx BcITa9">Tổng tiền hàng</h3>
          <div className="bwwaGp R3a05f BcITa9">₫{totalPrice}</div>
          <h3 className="bwwaGp iL6wsx RY9Grr">Phí vận chuyển</h3>
          <div className="bwwaGp R3a05f RY9Grr">₫28.800</div>
          <h3 className="bwwaGp iL6wsx _5y8V6a">Tổng thanh toán:</h3>
          <div className="bwwaGp l2Nmnm R3a05f _5y8V6a">₫77.800</div>
          <div className="uTFqRt">
            <div className="k4VpYA">
              <div className="C-NSr-">
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
            <button
              style={{
                padding: "0 20px",
                backgroundColor: "#216fdb",
                border: "none",
                borderRadius: "6px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
              className=" text-white stardust-button stardust-button--primary stardust-button--large apLZEG N7Du4X"
              onClick={() => {
                performVnPayCheckout();
              }}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
