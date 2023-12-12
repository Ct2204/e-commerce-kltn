import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useSelector } from "react-redux";
import { checkOutWithPaypal, checkOutWithVnpay } from "../../services/PaymentService.js";
import { useNavigate } from "react-router-dom";
import { getOrderById } from "../../services/OrderService.js";

const Payment = (props) => {

  const [orderProduct,setOrderProduct] = useState([])
  const [paymentMethod,setPaymentMethod] = useState("")
  const navigate = useNavigate()

  const orderId = useSelector((state) => state.order.orderId);



  useEffect(() => {
    handleToGetProductOrder();
  },[])

  const handleToGetProductOrder = async () => {
    const responseData = await getOrderById(orderId);
    setOrderProduct(responseData)
    console.log("order:",responseData)
  }

 

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

  const performPaypalCheckout = async () => {
    try {
      const responseData = await checkOutWithPaypal(orderId);
      if (responseData.code === 200) {
        window.location.href =responseData.data
      }
    } catch (error) {
      console.error("Error during Papal checkout:", error);
    }
  };

  const payment = () => {
    switch (paymentMethod) {
      case "VnPay":
        performVnPayCheckout();
        break;
      case "Paypal":
        performPaypalCheckout();
        break;
      case "ThanhToanKhiNhanHang":
        //handleCashOnDelivery();
        console.log("nhan hang");
        break;
      default:
        // Xử lý các trường hợp khác hoặc cung cấp một hành động mặc định
        break;
    }
  
  }

  
  
  const totalPrice = orderProduct.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);


  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  console.log(paymentMethod)
  
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
              {orderProduct.map((product, idx) => (
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
                    <div className="mt-3">{numberWithCommas(product.price)}</div>
                  </td>
                  <td>
                    <div className="mt-3">{product.quantity}</div>
                  </td>
                  <td>
                    <div className="mt-3">
                      {numberWithCommas(product.price * product.quantity)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="checkout-payment-method-view__current checkout-payment-setting product-cart mt-5">
          <div class="checkout-payment-method-view__current-title"
           >
            Phương thức thanh toán
          </div>
          <div class="checkout-payment-setting__payment-methods-tab">
            <div role="radiogroup">
            
             
              <span>
                <button
                  class="product-variation product-variation--disabled"
                  tabindex="0"
                  role="radio"
                  aria-label="Vnpay"
                  aria-disabled="true"
                  aria-checked="false"
                  onClick={() => { setPaymentMethod("VnPay") } }
                >
                  VnPay
                </button>
              </span>
              <span>
                <button
                  class="product-variation"
                  tabindex="0"
                  role="radio"
                  aria-label="Paypal"
                  aria-disabled="false"
                  aria-checked="false"
                  onClick={() => { setPaymentMethod("Paypal") } }
                >
                  Paypal
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
                  onClick={() => { setPaymentMethod("ThanhToanKhiNhanHang") } }
                >
                  Thanh toán khi nhận hàng
                </button>
              </span>
            </div>
            <div aria-live="polite"></div>
          </div>
        </div>
        <div class="KQyCj0" aria-live="polite" style={{paddingTop:"50px"}}>
          <h2 class="a11y-visually-hidden">Tổng thanh toán:</h2>
          <h3 class="bwwaGp iL6wsx BcITa9" style={{fontSize:"20px"}}>Tổng tiền hàng:</h3>
          <div class="bwwaGp R3a05f BcITa9" style={{fontSize:"20px",color:"#ee4d2d"}}>{numberWithCommas(totalPrice)} ₫</div>
          <h3 class="bwwaGp iL6wsx RY9Grr" style={{fontSize:"20px"}}>Phí vận chuyển:</h3>
          <div class="bwwaGp R3a05f RY9Grr" style={{fontSize:"20px",color:"#ee4d2d"}}>28.800 ₫</div>
          
          <div class="uTFqRt">
            <div class="k4VpYA">
              <div class="C-NSr-">
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Điều khoản của Shop
                </a>
              </div>
            </div>
            <button
              class="stardust-button stardust-button--primary stardust-button--large apLZEG N7Du4X"
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
