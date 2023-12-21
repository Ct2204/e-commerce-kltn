import React, { useEffect, useState } from 'react'
import './Cart.css'
import { BsSearch } from 'react-icons/bs'
import ProductCart from '../../components/ProductCart'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Form, Collapse, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteCartItem,
  getCartItem,
  updateCartItem,
} from '../../services/CartService.js'

import { createOrder } from '../../services/OrderService.js'
import { getorderId } from '../../store/reducers/order.js'
import { getProductsByCategory2 } from '../../services/product.js'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userInfor = useSelector((state) => state.auth.userInfo)
  console.log(userInfor.user_id, 'ssssssss')

  const isLogin = useSelector((state) => state.auth.isLoggedIn)
  console.log('có dang nhập', isLogin)

  const [carts, setCarts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [cartItemList, setCartItemList] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [productByCategoryNhan, setProductByCategoryNhan] = useState([])
  const [productByCategoryDongHo, setProductByCategoryDongHo] = useState([])

  const handleCheckboxChange = (cartItemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(cartItemId)) {
        // Nếu mục đã được chọn trước đó, bỏ khỏi mảng
        return prevSelectedItems.filter((itemId) => itemId !== cartItemId)
      } else {
        // Ngược lại, thêm vào mảng
        return [...prevSelectedItems, cartItemId]
      }
    })
  }

  console.log('cartItem', selectedItems)

  //Remove cart Item
  const handleToRemoveCartItem = async (id) => {
    const responseData = await deleteCartItem(userInfor.user_id, id)

    if (responseData.code === 200) {
      // Lọc ra các sản phẩm khác nhau với id được chọn và cập nhật trạng thái
      setCarts((prevCarts) =>
        prevCarts.filter((item) => item.cartItemId !== id)
      )
    } else {
      console.error('Failed to delete item:', responseData.message)
    }
  }

  // Increase quantity item
  const handleToIncreaseQuantity = async (id, quantityCart) => {
    const newQuantity = quantityCart + 1

    // Cập nhật trạng thái hiển thị ngay lập tức
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.cartItemId === id ? { ...item, quantity: newQuantity } : item
      )
    )

    const responseData = await updateCartItem(userInfor.user_id, [
      { cartItemId: id, quantity: newQuantity },
    ])
  }

  // Decrease quantiry cartItem
  const handleToDecreaseQuantity = async (id, quantityCart) => {
    const newQuantity = quantityCart - 1

    // Cập nhật trạng thái hiển thị ngay lập tức
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.cartItemId === id ? { ...item, quantity: newQuantity } : item
      )
    )

    const responseData = await updateCartItem(userInfor.user_id, [
      { cartItemId: id, quantity: newQuantity },
    ])
  }

  useEffect(() => {
    handleCartItem()
  }, [])

  //Get cart item
  const handleCartItem = async () => {
    setIsLoading(true)
    const responseData = await getCartItem(userInfor.user_id)
    setCarts(responseData)
    setIsLoading(false)
  }

  //convert price with commas
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const quantityItem = carts.length

  const [cartOrder, setCartOrder] = useState([])

  const totalPrice = selectedItems.reduce((acc, selectedItem) => {
    const selectedItemObject = carts.find(
      (item) => item.cartItemId === selectedItem
    )
    if (selectedItemObject) {
      return acc + selectedItemObject.quantity * selectedItemObject.price
    } else {
      return acc
    }
  }, 0)

  useEffect(() => {
    const updatedCartOrder = selectedItems
      .map((selectedItem) =>
        carts.find((item) => item.cartItemId === selectedItem)
      )
      .filter(Boolean) // Remove falsy values (null or undefined)

    setCartOrder(updatedCartOrder)

    // Save cartOrder to localStorage
  }, [selectedItems, carts])

  console.log('helo', cartOrder)

  //Order
  const handleToCreateOrder = async () => {
    const responseData = await createOrder(selectedItems, userInfor.user_id)
    console.log('hello', responseData)
    if (responseData.code === 201) {
      dispatch(getorderId({ orderId: responseData.data.order_id }))
    }
    localStorage.setItem('cartOrder', JSON.stringify(cartOrder))

    navigate('/payment')
    console.log(responseData.message)
  }

  const handleProductsByCategoryNhan = async () => {
    setIsLoading(true)
    const responseData = await getProductsByCategory2(2)
    setProductByCategoryNhan(responseData.listProducts)
    setIsLoading(false)
  }
  const handleProductsByCategoryDongHo = async () => {
    setIsLoading(true)
    const responseData = await getProductsByCategory2(1)
    setProductByCategoryDongHo(responseData.listProducts)
    setIsLoading(false)
  }

  useEffect(() => {
    handleProductsByCategoryDongHo()
  }, [])

  useEffect(() => {
    handleProductsByCategoryNhan()
  }, [])

  const changePageHandler = async (e, id) => {
    navigate(`/productdetail?productId=${id}`)
    window.scrollTo(0, 0)
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
            {carts.length === 0 ? (
              <div className="col-8">
                <div className="d-flex justify-content-between mt-5 cart-title">
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="text-cart" style={{ fontSize: '35px' }}>
                      Giỏ hàng của bạn
                    </h1>
                  </div>
                </div>

                <div className="info-image">
                  <img
                    style={{ width: '100%' }}
                    data-src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=43"
                    src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=43"
                    alt="Giỏ hàng của bạn đang trống"
                  />
                  <p className="text-center" style={{ fontSize: '30px' }}>
                    Chưa có sản phẩm trong giỏ hàng...
                  </p>
                </div>

                <div className="info-text">
                  <p
                    className="text-center"
                    style={{ fontSize: '20px', color: '#637184' }}
                  >
                    Bạn có thể quay về{' '}
                    <strong>
                      <a href="/" style={{ textDecoration: 'none' }}>
                        trang chủ
                      </a>
                    </strong>{' '}
                    hoặc nhập từ khoá sản phẩm bạn cần tìm ở đây:
                  </p>
                </div>
                {/* input */}
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

                {/* có thể bạn sẽ thích */}
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
            ) : (
              <div className="col-8">
                <div className="d-flex justify-content-between mt-5 cart-title">
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="text-cart" style={{ fontSize: '35px' }}>
                      Giỏ hàng của bạn
                    </h1>
                  </div>
                  <p
                    className="my-2 d-flex align-items-center justify-content-center"
                    style={{ fontSize: '20px' }}
                  >
                    Bạn đang có{' '}
                    <span className="price" style={{ fontSize: '20px' }}>
                      {quantityItem} sản phẩm
                    </span>{' '}
                    trong giỏ hàng
                  </p>
                </div>
                <div>
                  <ProgressBar variant="success" now={40} />
                </div>
                <div className="info-image">
                  {isLoading ? (
                    <h1>Đang load dữ liệu</h1>
                  ) : (
                    <div
                      className="border-cart"
                      style={{ border: '1px solid #ccc', marginTop: '30px' }}
                    >
                      {carts.map((cartItem, idx) => (
                        <div
                          key={idx}
                          className="item-img d-flex m-4"
                          style={{ borderBottom: '1px solid #ccc' }}
                        >
                          {/* image and remove */}
                          <a className="cart-item">
                            <img
                              style={{
                                width: '100px',
                                height: '100px',
                                marginRight: '10px',
                              }}
                              src={cartItem.url}
                              alt={cartItem.title}
                            />
                            <div className="item-remove">
                              <p
                                onClick={() => {
                                  handleToRemoveCartItem(cartItem.cartItemId)
                                }}
                                className=""
                                style={{
                                  color: '#fff',
                                  fontSize: '13px',
                                  textAlign: 'center',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                Xóa
                              </p>
                            </div>
                          </a>
                          {/* tittle and price */}
                          <div
                            className="item-info"
                            style={{ width: '330px', height: '120px' }}
                          >
                            <h3 className="item--title">
                              <a
                                className="text-decoration-none  mx-5"
                                style={{
                                  color: '#000',
                                  fontSize: '25px',
                                  verticalAlign: 'top',
                                  display: 'inline-block',
                                }}
                              >
                                {cartItem.title}
                              </a>
                            </h3>
                            <p className="mx-5" style={{ fontSize: '18px' }}>
                              {numberWithCommas(cartItem.price)}đ
                            </p>
                          </div>
                          <div className="item-total-price text-end">
                            <div className="price">
                              <span
                                className="line-item-total"
                                style={{ fontSize: '20px' }}
                              >
                                {numberWithCommas(
                                  cartItem.price * cartItem.quantity
                                )}
                                đ
                              </span>
                            </div>

                            {/* price*quanti */}
                            <div
                              className=""
                              style={{ display: 'flex', marginRight: '15px' }}
                            >
                              <div
                                style={{ width: '30px', height: '30px' }}
                                className="color-component"
                              >
                                <AiOutlineMinus
                                  onClick={() => {
                                    handleToDecreaseQuantity(
                                      cartItem.cartItemId,
                                      cartItem.quantity
                                    )
                                  }}
                                  style={{ width: '20px', height: '20px' }}
                                />
                              </div>
                              <div
                                className=" text1 d-grid align-items-center text-center"
                                style={{ width: '30px', height: '30px' }}
                              >
                                <div>{cartItem.quantity}</div>
                              </div>
                              <div
                                className="plus"
                                style={{ width: '30px', height: '30px' }}
                              >
                                <AiOutlinePlus
                                  onClick={() => {
                                    handleToIncreaseQuantity(
                                      cartItem.cartItemId,
                                      cartItem.quantity
                                    )
                                  }}
                                  style={{ width: '20px', height: '20px' }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="checkCartItem-container">
                            {/* input */}
                            <input
                              type="checkbox"
                              className="checkCartItem"
                              checked={selectedItems.includes(
                                cartItem.cartItemId
                              )}
                              onChange={() =>
                                handleCheckboxChange(cartItem.cartItemId)
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="info-text" style={{ paddingTop: '50px' }}>
                  <p
                    className="text-center"
                    style={{ fontSize: '20px', color: '#637184' }}
                  >
                    Bạn có thể quay về{' '}
                    <strong>
                      <Link to="/" style={{ textDecoration: 'none' }}>
                        trang chủ
                      </Link>
                    </strong>{' '}
                    hoặc nhập từ khoá sản phẩm bạn cần tìm ở đây:
                  </p>
                </div>
                <div
                  className="input-group mb-3"
                  style={{ paddingTop: '10px' }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeHolder="Tìm kiếm sản phẩm..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    style={{ height: '50px' }}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <BsSearch />
                  </button>
                </div>
              </div>
            )}
            <div className="col-4">
              <div className="order-summary-block mt-5">
                <h2
                  className="summary-title"
                  style={{ fontSize: '30px', fontStyle: 'bold' }}
                >
                  Thông tin đơn hàng
                </h2>

                <div
                  className="summary-total d-flex justify-content-between"
                  style={{ fontSize: '25px', padding: '20px 10px' }}
                >
                  <p>Tổng tiền:</p>
                  <p style={{ color: 'red' }}>{numberWithCommas(totalPrice)}</p>
                </div>
                <div className="summary-action" style={{ fontSize: '16px' }}>
                  <p style={{ paddingTop: '10px' }}>
                    Phí vận chuyển sẽ được tính ở trang thanh toán.
                  </p>
                  <p>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>{' '}
                </div>
                <div className="summary-button ">
                  <a
                    onClick={() => {
                      handleToCreateOrder()
                    }}
                    id="btnCart-checkout"
                    className="checkout-btn btnred disabled text-decoration-none text-white "
                    data-price-min="400000"
                    data-price-total="0"
                    href="#"
                  >
                    THANH TOÁN{' '}
                  </a>
                </div>
              </div>
              <div
                className="summary-warning alert-order"
                style={{ opacity: 0.9 }}
              >
                <p className="textmr">
                  <strong style={{ padding: '10px 5px' }}>
                    Chính sách mua hàng
                  </strong>
                  :
                </p>
                <p style={{ padding: '10px 5px' }}>
                  Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị
                  tối thiểu <strong>400.000₫ </strong> trở lên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <div style={{ paddingTop: '50px' }} className="mb-2">
          <h2 className="collectionCart-title">
            <a
              className="text-decoration-none text-body fs-2 fw-bold"
              href="/collections/trang-suc"
              style={{ marginLeft: '60px' }}
            >
              Có thể bạn sẽ thích
            </a>
          </h2>
        </div>
        <div className="row  mx-5">
          {productByCategoryDongHo.map((aProducts, idx) => (
            <div
              key={idx}
              className="col-3 product-card"
              onClick={(e) => changePageHandler(e, aProducts.id)}
            >
              <ProductCart
                title={aProducts.title}
                imageSrc={aProducts.listMediaProduct[0].url}
                imageSrc1={aProducts.listMediaProduct[1].url}
                price={numberWithCommas(aProducts.priceSales)}
                priceSale={numberWithCommas(aProducts.price)}
                percentDiscount={aProducts.percentDiscount}
              />
            </div>
          ))}
        </div>
        <div className="row  mx-5">
          {productByCategoryNhan.map((aProducts, idx) => (
            <div
              key={idx}
              className="col-3 product-card"
              onClick={(e) => changePageHandler(e, aProducts.id)}
            >
              <ProductCart
                title={aProducts.title}
                imageSrc={aProducts.listMediaProduct[0].url}
                imageSrc1={aProducts.listMediaProduct[1].url}
                price={numberWithCommas(aProducts.priceSales)}
                priceSale={numberWithCommas(aProducts.price)}
                percentDiscount={aProducts.percentDiscount}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cart
