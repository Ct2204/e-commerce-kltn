import React, { useEffect, useState } from "react";
import "./Cart.css";
import { BsSearch } from "react-icons/bs";
import ProductCart from "../../components/ProductCart";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Collapse } from "react-bootstrap";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

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

  const removeCart = (idx) => {
    var indexToRemove = idx;
    if (indexToRemove >= 0 && indexToRemove < cart.length) {
      // Xoá phần tử khỏi mảng
      cart.splice(indexToRemove, 1);
      // Lưu lại mảng đã cập nhật vào localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      navigate("/cart");
    }
  };

  const handleAddCart = (idx) => {
    // Tạo đối tượng mới
    const newObject = {
      id: cart[idx].id,
      title: cart[idx].title,
      image: cart[idx].image,
      price: cart[idx].price,
      quantity: 1,
    };

    // Thêm đối tượng mới vào mảng
    setCart((prevCart) => [...prevCart, newObject]);
    // Lưu mảng mới vào localStorage
    localStorage.setItem("cart", JSON.stringify([...cart, newObject]));
  };

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
                  Bạn đang có <span className="price"> 7 sản phẩm</span> trong
                  giỏ hàng
                </p>
              </div>
              <div>
                <ProgressBar variant="success" now={40} />
              </div>
              <div className="info-image">
                {/* <ul>
                  
                    <li key={product.id}>
                      <img src={product.image} alt={product.title} />
                      <p></p>
                      <p></p>
                      {/* Thêm các thông tin khác của sản phẩm nếu cần */}
                {/* </li> */}
                {/* ))} */}
                {/* </ul> */}
                <div className="border-cart">
                  {mergedCart.map((product, idx) => (
                    <div key={idx} className="item-img d-flex m-4">
                      <a>
                        <img
                          style={{ width: "80px", height: "80px" }}
                          src={product.image}
                          alt="Nhẫn cưới vàng 18K đính đá ECZ SWAROVSKI"
                        />
                        <div className="item-remove">
                          <a className="cart text-body text-decoration-none">
                            Xóa
                          </a>
                        </div>
                      </a>
                      <div className="item-info">
                        <h3 className="item--title">
                          <a className="text-decoration-none color-cart mx-5">
                            {product.title}
                          </a>
                        </h3>
                        <p className="mx-5">{product.price}</p>
                      </div>
                      <div className="item-total-price text-end">
                        <div className="price">
                          <span className="line-item-total">
                            {product.price}
                          </span>
                        </div>
                        <div className="d-flex color my-4">
                          <div
                            style={{ width: "20px", height: "20px" }}
                            className="color-component"
                          >
                            <AiOutlineMinus
                              onClick={() => removeCart(idx)}
                              style={{ width: "10px", height: "10px" }}
                            />
                          </div>
                          <div
                            className=" text1 d-grid align-items-center text-center"
                            style={{ width: "20px", height: "20px" }}
                          >
                            <div>{product.quantity}</div>
                          </div>
                          <div
                            className="plus"
                            style={{ width: "20px", height: "20px" }}
                          >
                            <AiOutlinePlus
                              onClick={() => handleAddCart(idx)}
                              style={{ width: "10px", height: "10px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-text">
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
                      <p className="txt-time ">Chọn thời gian</p>
                    </div>
                    <div
                      class="boxtime-radio"
                      id="picktime_radio"
                      data-time-start=""
                      data-time-end=""
                    >
                      <div>
                        <Form>
                          <Form.Check
                            type="radio"
                            label="Option 1"
                            id="radio1"
                            checked={selectedOption === "radio1"}
                            onChange={() => handleRadioChange("radio1")}
                          />
                          <Form.Check
                            type="radio"
                            label="Option 2"
                            id="radio2"
                            checked={selectedOption === "radio2"}
                            onChange={() => handleRadioChange("radio2")}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Collapse in={selectedOption === "radio2"}>
                    <div>
                      <div>
                        <div>
                          <label>Ngày giao</label>
                        </div>
                        <div>
                          <Form>
                            <Form.Label>Select a date:</Form.Label>
                            <Form.Control as="select">
                              <option value="13/11/2023">Hôm nay</option>
                            </Form.Control>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="summary-total d-flex justify-content-between">
                  <p>Tổng tiền:</p>
                  <p>0đ</p>
                </div>
                <div className="summary-action">
                  <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                  <p>
                    Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                  </p>{" "}
                  <div
                    class="summary-alert alert alert-danger "
                    style={{ display: "block" }}
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
                <p class="textmr">
                  <strong>Chính sách mua hàng</strong>:
                </p>
                <p>
                  Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị
                  tối thiểu <strong>400.000₫ </strong> trở lên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
