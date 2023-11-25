import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import ProductCart from "../../components/ProductCart";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getProductDescription,
  getProductDetail,
  getProductItem,
  getProductItems,
  getProductOption,
  getProductOptionDetail,
} from "../../services/product";
import { createCart } from "../../services/CartService.js";

const ProductDetail = (props) => {
  const [message, setMessage] = useState("")
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [productDescription, setProductDescription] = useState([]);

  const [productOption, setProdoductOption] = useState([]);
  const [productOptionDetail, setProductOptionDetail] = useState();
  const [productItem, setProductItem] = useState();
  const [productItems, setProductItems] = useState([]);
  
  const [productItemId, setProductItemId] = useState([]);


  const productId = searchParams.get("productId");
  const productOptionDetailId = 1002;

  let userId = 33;
  // const productOptionDetailId = searchParams.get("productOptionDetailId")

  

  useEffect(() => {
    loadData(productId);
    handleProductDescription(productId);
    handleProductOption(productId)
    handleProductItem(productId)
  }, [productId]);


  // select index to find index of product item
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);

  const handleIndex = async (productIndex, optionIndex) => {  
    if (productIndex === 0) {
      setOption1(optionIndex)
    }
    if (productIndex === 1) {
      setOption2(optionIndex) 
    } 
  };
  
  useEffect(() => {
    
    if (productOption.length === 1) {
      
      setSelectedOptions([option1])
      handleProductItemId()
      
    } else {
      setSelectedOptions([option1, option2]);
      handleProductItemId()
    }
   
  },  [option1, option2])
  
  let id;
  
  useEffect(() => {
    handleProductItemId(id)
  },[id])
  

  


  useEffect(() => {
    handleProductItems(productId)
  },[])

  //get product items
  const handleProductItems = async (productId) => {
    setIsLoading(true);
    const responseData = await getProductItems(productId);
    setIsLoading(false);
    //console.log(responseData.productItems);
    setProductItems(responseData.productItems)
  }
  console.log(productItems);

  // get product detail
  const loadData = async (productId) => {
    setIsLoading(true);
    const responseData = await getProductDetail(productId);
    setIsLoading(false);
    setProductDetail(responseData);
  };

  //get product description
  const handleProductDescription = async (productId) => {
    setIsLoading(true);
    const responseData = await getProductDescription(productId);
    setIsLoading(false);
    setProductDescription(responseData);
  };

  //get product option
  const handleProductOption = async (productId) => {
    setIsLoading(true);
    const responseData = await getProductOption(productId);
    setIsLoading(false);
  //  console.log("option",responseData)
    setProdoductOption(responseData);
  }
  // get product item 
  const handleProductItem = async (productId) => {
    setIsLoading(true);
    const responseData = await getProductItem(productId);
   // console.log("productItemmmmmmmmmmmmm",responseData);
    setIsLoading(false);
    setProductItem(responseData)
  }


 

 
  //convert integer to float
  const numberWithCommas =  (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleProductItemId = () => {
    productItems.filter(item => JSON.stringify(item.optionValueIndex) === JSON.stringify(selectedOptions))
    .map((filteredItem, idx) => {
      setProductItemId(filteredItem.id)
    })
   
  }

  //cart
  const navigate = useNavigate();
  // const handleAddToCart = (productItemId,userId,quantity) => {
  //   // Lấy thông tin sản phẩm từ props.data
  //   const product = {
  //     id: productDetail.id,
  //     title: productDetail.title,
  //     price: productDetail.priceSales, // hoặc data.price nếu không có giảm giá
  //     quantity: 1, // bạn có thể sửa đổi số lượng theo nhu cầu
  //     image: productDetail.listMediaProduct[0].url, // lấy ảnh đầu tiên làm ảnh đại diện
  //   };
  //   // Lưu thông tin sản phẩm vào Local Storage hoặc Redux store, tùy thuộc vào cách bạn quản lý trạng thái
  //   // Ví dụ sử dụng Local Storage
  //   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const updatedCart = [...existingCart, product];
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   // Chuyển hướng đến trang giỏ hàng
  // };


  

  const handleAddToCart = async (productItemId,userId,quantity) => {
    // Lấy thông tin sản phẩm từ props.data
    
    // e.preventDefault();
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    const responseData = await createCart(userId,1,productItemId);
  
    if (responseData.code === 200) {
      setMessage(responseData.message);
      
    } else {
      setMessage(responseData.message)
    } 
  };

  console.log("11111111", selectedOptions)
  console.log("productItemId",productItemId);

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
            <li class="breadcrumb-item">
              <a className="text-decoration-none text-body" href="#">
                Trang sức
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page"></li>
          </ol>
        </nav>
      </div>

      {isLoading ? (
        <h1>Đang load dữ liệu</h1>
      ) : (
        <div class="container text-center">
            {productItems.map((productItem, indexItem) => (
          <div class="row">
          <div class="col-4">
            <div className="mt-5">
              <img
                className="img-feature"
                style={{ width: "100%", height: "100%" }}
                src={productDetail?.listMediaProduct?.[0]?.url}
                atl=""
              />

              <div className="control prev">
                <MdKeyboardArrowLeft />
              </div>
              <div className="control next">
                <MdKeyboardArrowRight />
              </div>
            </div>

            <div className="list-image ">
              <img
                className="mx-2 active"
                style={{ width: "15%", height: "15%" }}
                src={productDetail?.listMediaProduct?.[0]?.url}
                atl=""
              />

              <img
                className="mx-2 active"
                style={{ width: "15%", height: "15%" }}
                src={productDetail?.listMediaProduct?.[1]?.url}
                atl=""
              />

              <img
                className="mx-2 active"
                style={{ width: "15%", height: "15%" }}
                src={productDetail?.listMediaProduct?.[2]?.url}
                atl=""
              />
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-8 product-wrapper mt-5">
                <div className="product-heading">
                  <h1 className="product-title">{productDetail.title}</h1>
                  <span id="pro_sku" className="mr-3">
                    Mã sản phẩm: <strong>{productDetail.sku}</strong>
                  </span>
                  <span className="pro-soldold">
                    |&ensp;Tình trạng:
                    <strong>{productDetail.status}</strong>
                  </span>
                  <span className="pro-vendor">
                    |&ensp; Thương hiệu:
                    <strong>
                      <a
                        className="text-decoration-none text-body"
                        title="Show vendor"
                        href="/collections/vendors?q=citizen"
                      >
                        Citizen
                      </a>
                    </strong>
                  </span>
                    </div>
                
                <div className="product-price my-4" id="price-preview">
                      <span className="pro-title">Giá: </span>
                      {
                        (productDetail?.priceSales === undefined) ? (null) : (<span className="pro-price">{numberWithCommas(productDetail?.priceSales)}</span>)
                      }
                  {
                        (productDetail?.priceSales === undefined) ? (null) : ( <del>{numberWithCommas(productDetail?.price)}</del>)
                      }
                 
                  <span className="pro-percent">
                    {productDetail?.percentDiscount}%
                  </span>
                    </div>
                   
                    {isLoading ? (<h1>Đang load dữ liệu</h1>) : (
                      <div >
                        {productOption.map((aProducts, productIndex) => (
                          <div 
                          className="product-option text-start"
                  key={productIndex}
                >
                            <div className="product-optionName">{aProducts.option}:</div>
                           
                            <ul className="product-detail">{aProducts.listProductOptionDetail.map((optiondetail, optionIndex) => (
                              
                              <li
                                key={optiondetail.id}
                                className="product-detail-item"
                                onClick={() => handleIndex(productIndex, optionIndex)}                            
                              >
                               {optiondetail.value}                            
                             </li>
                            ))
 }</ul>
                
                </div>
              ))}
                      </div>
                  
                )}
                
                <div className="d-flex color my-4">
                  <div>
                        <strong>Số lượng:</strong>
              
                  </div>
                      <div className="quantity-container">
                      <div
                    style={{ width: "40px", height: "40px" }}
                    className="color-component"
                  >
                    <AiOutlineMinus style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div
                    className=" text1 d-grid align-items-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <div>1</div>
                  </div>
                  <div
                    className="plus"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <AiOutlinePlus style={{ width: "20px", height: "20px" }} />
                      </div>
                  </div>
                        <div
                        >
                  {productItems
                  .filter(item => JSON.stringify(item.optionValueIndex) === JSON.stringify(selectedOptions))
                  .map((filteredItem, idx) => {
                    // handleProductItemId(filteredItem.id)
                    return (
                      <p key={idx}>
                        {filteredItem.quantity} sản phẩm có sẵn
                        {/* {handleProductItemId(filteredItem.id)} */}
                        {console.log(filteredItem.id)}
                      </p>
                    );
                  })
  }                               
                  </div>
                </div>
                <div className="row d-flex">
                  <div
                    style={{ height: "45px" }}
                    className="col-6 d-grid justify-content-center align-items-center "
                  >
                          <div className="border border-danger px-5  text-danger rounded">
                            {/* {productItems
                  .filter(item => JSON.stringify(item.optionValueIndex) === JSON.stringify(selectedOptions))
                  .map((filteredItem, idx) => {
                    // handleProductItemId(filteredItem.id)
                    return (
                      <div key={idx}>
                         <p className="white-button m-2" onClick={handleAddToCart(filteredItem.id,userId,filteredItem.quantity)}>
                        Thêm vào giỏ
                      </p>
                        {console.log("add to cart",filteredItem.id)}
                      </div>
                    );
                  })
  }         */}
                     <p className="white-button m-2" >
                        Thêm vào giỏ
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ height: "45px" }}
                    className="col-6 d-grid justify-content-center align-items-center"
                  >
                    <div
                      onClick={() => navigate("/cart")}
                      className="border border-danger px-5 py-2 bg-danger text-white rounded"
                    >
                      <strong>MUA NGAY</strong>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div
                    style={{ width: "88%", height: "45px" }}
                    className="d-grid justify-content-center align-items-center border border-dark click rounded bg-dark text-light"
                  >
                    <strong>CLICK VÀO ĐÂY ĐỂ NHẬN ƯU ĐÃI</strong>
                  </div>
                </div>
                <div className="d-flex color">
                  <div className="text-start">
                    <strong>Chia sẻ:</strong>
                  </div>
                  <div>
                    <BsFacebook
                      className="icon-facebook text-primary"
                      style={{ height: "25px", width: "25px" }}
                    />{" "}
                    <BsMessenger
                      className="mx-3 text-primary"
                      style={{ height: "25px", width: "25px" }}
                    />{" "}
                    <AiFillTwitterCircle
                      style={{ height: "30px", width: "30px" }}
                      className="text-primary"
                    />{" "}
                    <AiOutlineInstagram
                      className="mx-3 text-primary"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-wrap product-deliverly text-start">
                  <div className="col-lg-12 col-md-6 col-12 deliverly-inner">
                    <div className="title-deliverly mt-4">
                      <span>
                        <strong>Chính sách bán hàng</strong>
                      </span>
                    </div>
                    <div className="infoList-deliverly">
                      <div className="deliverly-item">
                        <span>
                          <img
                            style={{ height: "21px", width: "30px" }}
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_1_ico.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_1_ico.png?v=43"
                            alt="Cam kết 100% chính hãng"
                          />
                        </span>
                        Cam kết 100% chính hãng
                      </div>

                      <div className="deliverly-item ">
                        <span>
                          <img
                            style={{ height: "21px", width: "30px" }}
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_2_ico.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_2_ico.png?v=43"
                            alt="Miễn phí giao hàng"
                          />
                        </span>
                        Miễn phí giao hàng
                      </div>

                      <div className="deliverly-item mb-3">
                        <span>
                          <img
                            style={{ height: "21px", width: "30px" }}
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_3_ico.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_3_ico.png?v=43"
                            alt="Hỗ trợ 24/7"
                          />
                        </span>
                        Hỗ trợ 24/7
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 col-12 deliverly-inner">
                    <div className="title-deliverly">
                      <span>
                        <strong>Thông tin thêm</strong>
                      </span>
                    </div>
                    <div className="infoList-deliverly">
                      <div className="deliverly-item">
                        <span>
                          <img
                            style={{ height: "21px", width: "30px" }}
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_4_ico.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_4_ico.png?v=43"
                            alt="Hoàn tiền 111% nếu hàng giả"
                          />
                        </span>
                        Hoàn tiền 111% nếu hàng giả
                      </div>

                      <div className="deliverly-item">
                        <span>
                          <img
                            style={{ height: "21px", width: "30px" }}
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_5_ico.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_5_ico.png?v=43"
                            alt="Mở hộp kiểm tra nhận hàng"
                          />
                        </span>
                        Mở hộp kiểm tra nhận hàng
                      </div>

                      <div className="deliverly-item mb-4">
                        <span>
                          <img
                            style={{ height: "21px", width: "30px" }}
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_6_ico.png?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/product_deliverly_6_ico.png?v=43"
                            alt="Đổi trả trong 7 ngày"
                          />
                        </span>
                        Đổi trả trong 7 ngày
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productDetail--box box-detail-description mg-top text-start my-5">
            <div className="product-description">
              <div className="box-title">
                <h2 className="title-h2">Mô tả sản phẩm</h2>
              </div>
              <div className="description-content expandable-toggle opened">
                <div className="description-productdetail">
                  <p>
                    <span>{productDescription?.[0]?.description}</span>
                  </p>
                </div>
                <div className="description-btn">
                  <button className="expandable-content_toggle js_expandable_content d-none">
                    <span className="expandable-content_toggle-icon"></span>
                    <span className="expandable-content_toggle-text">
                      Xem thêm nội dung
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <h1 className="text-start">CÂU HỎI THƯỜNG GẶP</h1>
            <Accordion.Item
              className="border-0"
              style={{ width: "60%" }}
              eventKey="0"
            >
              <Accordion.Header>
                <strong>Làm thế nào để tôi đặt hàng online?</strong>
              </Accordion.Header>
              <Accordion.Body className="text-start">
                The swan rất vui lòng hỗ trợ khách hàng đặt hàng online bằng một
                trong những cách đặt hàng sau:
                <br />
                - Truy cập trang web: The swan
                <br />
                - Gửi email đặt hàng về địa chỉ: hi@theswan.com
                <br />
                - Liên hệ số hotline: 1900.636.000 để đặt sản phẩm
                <br />- Chat với tư vấn viên trên fanpage của The swan
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border-0"
              style={{ width: "60%" }}
              eventKey="1"
            >
              <Accordion.Header>
                <strong>
                  Nếu tôi đặt hàng trực tuyến có những rủi ro gì không?
                </strong>
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Với The swan, khách hàng không phải lo lắng, vì chúng tôi cam
                kết cung cấp sản phẩm chất lượng tốt, giá cả phải chăng. Đặc
                biệt, khách hàng sẽ nhận được sản phẩm và thanh toán cùng một
                thời điểm.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border-0"
              style={{ width: "60%" }}
              eventKey="2"
            >
              <Accordion.Header>
                <strong>
                  Nếu tôi mua sản phẩm với số lượng nhiều thì giá có được giảm
                  không?
                </strong>
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Khi mua hàng với số lượng nhiều khách hàng sẽ được hưởng chế độ
                ưu đãi, giảm giá ngay tại thời điểm mua hàng. Khách hàng vui
                lòng liên hệ Mode để được hỗ trợ trực tiếp qua số điện thoại:
                1900.636.000
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border-0"
              style={{ width: "60%" }}
              eventKey="3"
            >
              <Accordion.Header>
                <strong>
                  Quy đinh hoàn trả và đổi sản phẩm của Mode như thế nào?
                </strong>
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Khách hàng vui lòng tham khảo chính sách đổi trả sản phẩm của
                The swan để được cung cấp thông tin đầy đủ và chi tiết nhất. Lưu
                ý: Đối với dòng sản phẩm túi và giày điều kiện đổi trả được thực
                hiện trong vòng 30 ngày kể từ ngày nhận hàng và hàng hoá đảm bảo
                còn giữ nguyên tem nhãn sản phẩm. (chưa qua sử dụng)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border-0"
              style={{ width: "60%" }}
              eventKey="4"
            >
              <Accordion.Header>
                <strong>
                  Tôi mua hàng rồi, không vừa ý có thể đổi lại hay không?{" "}
                </strong>
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Khi mua hàng nếu khách hàng không vừa ý với sản phẩm, hãy cho
                The swan được biết, chúng tôi sẽ đổi ngay sản phẩm cho khách
                hàng. Chỉ cần đảm bảo sản phẩm chưa qua sử dụng, còn nguyên tem
                nhãn. Chúng tôi sẽ hỗ trợ đổi (size, màu, sản phẩm khác) cho
                khách hàng.
              </Accordion.Body>
            </Accordion.Item>
            <div className="text-start mt-3">
              <button type="button" className="btn btn-dark">
                Xem Thêm
              </button>
            </div>
          </Accordion>
          <div classname="container">
            <h3 className="text-start my-5">
              <a>Sản phẩm liên quan</a>
            </h3>
            <div className="row">
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
            </div>
          </div>
          <div classname="container-fuild">
            <div className="row  my-3">
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col-3">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
            </div>
          </div>
        </div>
            ))} 
      </div>
      ) }
    </>
  );
};

export default ProductDetail;
