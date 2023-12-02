import React, { useEffect, useState } from "react";
import "./Cart.css";
import { BsSearch } from "react-icons/bs";
import ProductCart from "../../components/ProductCart";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteCartItem, getCartItem, updateCartItem } from "../../services/CartService.js";
import { log } from "../../store/reducers/auth.js";
import { createOrder } from "../../services/OrderService.js";

const Cart = () => {
  
  const navigate = useNavigate();
  const userInfor = useSelector((state) => state.auth.userInfo);

  const isLogin = useSelector((state) => state.auth.isLoggedIn)
  console.log("có dang nhập",isLogin)
  
  const [carts,setCarts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [cartItemList, setCartItemList] = useState([])
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (cartItemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(cartItemId)) {
        // Nếu mục đã được chọn trước đó, bỏ khỏi mảng
        return prevSelectedItems.filter((itemId) => itemId !== cartItemId);
      } else {
        // Ngược lại, thêm vào mảng
        return [...prevSelectedItems, cartItemId];
      }
    });
  };

  console.log("cartItem",selectedItems)

  //Remove cart Item
  const handleToRemoveCartItem = async (id) => {
    
    const responseData = await deleteCartItem(userInfor.user_id, id)
    
    if (responseData.code === 200) {
      // Lọc ra các sản phẩm khác nhau với id được chọn và cập nhật trạng thái
      setCarts((prevCarts) => prevCarts.filter(item => item.cartItemId !== id));
    } else {
      console.error("Failed to delete item:", responseData.message);
    }
  }
  
  // Increase quantity item
  const handleToIncreaseQuantity = async (id, quantityCart) => {  
    
    const newQuantity = quantityCart + 1;
    
    // Cập nhật trạng thái hiển thị ngay lập tức
    setCarts(prevCarts => 
      prevCarts.map(item => 
        item.cartItemId === id ? { ...item, quantity: newQuantity } : item
      )
    );
    
    const responseData = await updateCartItem(userInfor.user_id, [{ cartItemId: id, quantity: newQuantity }]);
  }

  // Decrease quantiry cartItem
  const handleToDecreaseQuantity = async (id,quantityCart) => {
    
    const newQuantity = quantityCart - 1;
    
    // Cập nhật trạng thái hiển thị ngay lập tức
    setCarts(prevCarts => 
      prevCarts.map(item => 
        item.cartItemId === id ? { ...item, quantity: newQuantity } : item
      )
    );
    
    const responseData = await updateCartItem(userInfor.user_id, [{ cartItemId: id, quantity: newQuantity }]);
  }

 
  useEffect(() => {
    handleCartItem();
  },[])

  //Get cart item
  const handleCartItem = async () => {
    setIsLoading(true)
    const responseData = await getCartItem(userInfor.user_id)
    setCarts(responseData)
    setIsLoading(false)
  }
  
  //convert price with commas
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const totalPrice = carts.reduce((account, item) => {
    return account + item.quantity*item.price
  },0);
  const quantityItem = carts.length;
  // console.log(quantityItem);


  //Order
  const handleToCreateOrder = async () => {
    const responseData = await createOrder(selectedItems, userInfor.user_id)
    console.log(responseData.message)
  }

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
                  Bạn đang có <span className="price">{quantityItem} sản phẩm</span> trong
                  giỏ hàng
                </p>
              </div>
              <div>
                <ProgressBar variant="success" now={40} />
              </div>
              <div className="info-image">
                    {isLoading ? (<h1>Đang load dữ liệu</h1>) : (
                       <div className="border-cart">
                       {carts.map((cartItem, idx) => (
                         <div key={idx} className="item-img d-flex m-4">
                           <a>
                             <img
                               style={{ width: "80px", height: "80px" }}
                               src={cartItem.url}
                               alt={cartItem.title}
                             />
                             <div
                               className="item-remove"                                             
                             >

                               <p
                                  onClick={()=>{handleToRemoveCartItem(cartItem.cartItemId)}} 
                                 className="cart text-body text-decoration-none">
                                 Xóa
                               </p>
                             </div>
                           </a>
                           <div className="item-info">
                             <h3 className="item--title">
                               <a className="text-decoration-none color-cart mx-5">
                                 {cartItem.title}
                               </a>
                             </h3>
                             <p className="mx-5">{cartItem.price}</p>
                           </div>
                           <div className="item-total-price text-end">
                             <div className="price">
                               <span className="line-item-total">
                                 {cartItem.price*cartItem.quantity}
                               </span>
                             </div>
                             <div className="d-flex color my-4">
                               <div
                                 style={{ width: "20px", height: "20px" }}
                                 className="color-component"
                               >
                                 <AiOutlineMinus
                                   onClick={() => { handleToDecreaseQuantity(cartItem.cartItemId, cartItem.quantity) }}
                                   style={{ width: "10px", height: "10px" }}
                                 />
                               </div>
                               <div
                                 className=" text1 d-grid align-items-center text-center"
                                 style={{ width: "20px", height: "20px" }}
                               >
                                 <div>{cartItem.quantity}</div>
                               </div>
                               <div
                                 className="plus"
                                 style={{ width: "20px", height: "20px" }}
                               >
                                 <AiOutlinePlus
                                  onClick={()=>{handleToIncreaseQuantity(cartItem.cartItemId,cartItem.quantity)}}
                                   style={{ width: "10px", height: "10px" }}
                                 />
                               </div>
                             </div>
                           </div>
                           <input
                           type="checkbox"
                           checked={selectedItems.includes(cartItem.cartItemId)}
                          onChange={() => handleCheckboxChange(cartItem.cartItemId)}
            />
                         </div>
                       ))}
                     </div>
               )}
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
                            //checked={selectedOption === "radio1"}
                            // onChange={() => handleRadioChange("radio1")}
                          />
                          <Form.Check
                            type="radio"
                            label="Option 2"
                            id="radio2"
                            // checked={selectedOption === "radio2"}
                            // onChange={() => handleRadioChange("radio2")}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                 {/* <Collapse in={selectedOption === "radio2"}> */}
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
                  {/* </Collapse> */}
                </div>
                <div className="summary-total d-flex justify-content-between">
                  <p>Tổng tiền:</p>
                  <p>{totalPrice }</p>
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
                    onClick={() => {handleToCreateOrder()}}
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
