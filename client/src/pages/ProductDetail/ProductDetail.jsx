import React from "react";
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
import Accordion from 'react-bootstrap/Accordion';

const ProductDetail = (props) => {
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
            <li class="breadcrumb-item" aria-current="page">
              
            </li>
          </ol>
        </nav>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <div className="main mt-5">
              <img
                className="img-feature"
                style={{ width: "100%", height: "100%" }}
                src="https://product.hstatic.net/200000593853/product/watches-11_2b86e2a2d6394ddd8fd930a0311dcf07_12cff7311eba4c9e9f932a03d614ac95_master.jpg"
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
                src="https://product.hstatic.net/200000593853/product/watches-7_fe48f478cb60416484015de512cf6d93_6011bb0f584748d28f64fa8ed8a9022f_master.jpg"
                atl=""
              />
              <img
                style={{ width: "15%", height: "15%" }}
                src="https://product.hstatic.net/200000593853/product/watches-7hover_a229948f72c441d9968243219b0847f1_0ac6191c07da49e2ac754ef2dd2a197b_master.jpg"
                atl=""
              />
              <img
                className="mx-2"
                style={{ width: "15%", height: "15%" }}
                src="https://product.hstatic.net/200000593853/product/watches-8hover_73466194c5b446848a651dd82f441eb8_e887e106b6064137ac500742ba587fb9_master.jpg"
                atl=""
              />
              <img
                style={{ width: "15%", height: "15%" }}
                src="https://product.hstatic.net/200000593853/product/watches-11_2b86e2a2d6394ddd8fd930a0311dcf07_12cff7311eba4c9e9f932a03d614ac95_master.jpg"
                atl=""
              />

              <img
                className="mx-2"
                style={{ width: "15%", height: "15%" }}
                src="https://product.hstatic.net/200000593853/product/watches-img2_c35aa71bfd9f404b908baad50b4c3e31_1ebfb95b43494096a53d6e6c85f453ed_master.jpg"
                atl=""
              />
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-8 product-wrapper mt-5">
                <div className="product-heading">
                  <h1 className="product-title">Mayfair - Full Black</h1>
                  <span id="pro_sku" className="mr-3">
                    Mã sản phẩm: <strong>DH-1001</strong>
                  </span>
                  <span className="pro-soldold">
                    |&ensp;Tình trạng:
                    <strong>Hết hàng</strong>
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
                  <span className="pro-price">7,800,000₫</span>
                  <del>8,800,000₫</del>
                  <span className="pro-percent">-11%</span>
                </div>
                <div className="color">
                  <div className="text-start ">
                    <strong>Màu sắc:</strong>
                  </div>

                  <div className="bg-secondary text-secondary rounded-circle color-component">
                    text
                  </div>
                  <div className="bg-success text-success rounded-circle mx-4 ">
                    text
                  </div>
                  <div className="bg-warning text-warning rounded-circle ">
                    text
                  </div>
                  <div className="bg-danger text-danger rounded-circle mx-4 ">
                    text
                  </div>
                </div>
                <div className="d-flex color my-4">
                  <div>
                    <strong>Số lượng:</strong>
                  </div>
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
                <div className="row d-flex">
                  <div
                    style={{ height: "45px" }}
                    className="col-6 d-grid justify-content-center align-items-center "
                  >
                    <div className="border border-danger px-5 py-2 text-danger rounded">
                      <strong>THÊM VÀO GIỎ</strong>
                    </div>
                  </div>
                  <div
                    style={{ height: "45px" }}
                    className="col-6 d-grid justify-content-center align-items-center"
                  >
                    <div className="border border-danger px-5 py-2 bg-danger text-white rounded">
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
                    <span>
                      Trang sức luôn được sử dụng để tôn lên vẻ đẹp rạng ngời.
                      Với chị em phụ nữ, nhẫn vàng trở thành biểu tượng của sự
                      vĩnh cửu và tồn tại nhiều năm trong tủ đồ. Bên cạnh đó,
                      loại trang sức đính đá đều được các quý bà, quý cô hết sức
                      nâng niu.
                    </span>
                  </p>
                  <p>
                    <span>
                      Điểm nhấn chính của nhẫn được lấy cảm hứng chủ đạo từ họa
                      tiết lá ô liu được cách điệu hoàn hảo với sự nữ tính ẩn
                      hiện trong vẻ huyền bí, nét thanh lịch, sang trọng toát ra
                      từ những thiết kế tinh tế, khơi nguồn để phái đẹp tỏa
                      sáng, chinh phục thành công cùng nguyện ước chân thành cho
                      những điều tốt đẹp nhất trong cuộc sống.
                    </span>
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
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
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
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
                <ProductCart
                  title="Camden-Golden Brown"
                  brand="Seiko"
                  imageSrc="https://product.hstatic.net/200000593853/product/watches-2_18f627d16ec74bd3ac0366e14e223425_9113b9fd1ed74e58a777a0c1f8d26ae5_master.jpg"
                  imageSrc1="https://product.hstatic.net/200000593853/product/watches-2hover_a91ec9bcf1214ce6a13f57ecc8feb087_11da29ca7cda4a14b2c814783d4b657a_master.jpg"
                  price="Liên hệ báo giá"
                />
              </div>
              <div className="col">
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
      </div>
    </>
  );
};

export default ProductDetail;