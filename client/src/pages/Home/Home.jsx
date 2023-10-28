import React from 'react';

import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import ProductCart from '../../components/ProductCart';
import GuideCart from '../../components/GuideCart';



class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <Carousel className="bg-danger">
            <Carousel.Item>
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/slide_3_img.jpg?v=41"
                className="d-block w-100"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/slide_2_img.jpg?v=41"
                className="d-block w-100"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/slide_1_img.jpg?v=41"
                className="d-block w-100"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="text-center scroll-down-section my-4">
          <button aria-label="scroll down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              x="0"
              y="0"
              viewBox="0 0 128 128"
            >
              <g>
                <path d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="container-fuild text-center">
          <div className="row mx-5">
            <div className="col ">
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/img_home_banner_desktop_1.jpg?v=41"
                className="d-block w-100"
                alt="First slide"
              />
            </div>
            <div className="col">
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/img_home_banner_desktop_2.jpg?v=41"
                className="d-block w-100"
                alt="First slide"
              />
            </div>
          </div>
          <div className="row m-5 ">
            <div className="col ">
              <h4>
                <a
                  className="title"
                  href="https://the-swan.myharavan.com/collections/dong-ho"
                >
                  Đồng hồ
                </a>
              </h4>
              <p className="text">
                Cùng với sự phát triển không ngừng của thời trang thế giới, rất
                nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
                dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
              </p>
              <div className="action-home-banner">
                <a
                  className="btn-home-banner"
                  href="https://the-swan.myharavan.com/collections/dong-ho"
                  aria-label="Mua ngay"
                >
                  Mua ngay
                </a>
              </div>
            </div>
            <div className="col">
              <h4>
                <a
                  className="title"
                  href="https://the-swan.myharavan.com/collections/trang-suc"
                  aria-label="Trang sức"
                >
                  Trang sức
                </a>
              </h4>
              <p className="text">
                Ngày nay, thế giới trang sức nam, nữ chính hãng rất đẹp, đa dạng
                với nhiều kiểu dáng, chất liệu khác nhau (vàng, bạc, đính đá),
                từ vòng tay, hoa tai, dây chuyền cho đến cả nhẫn.
              </p>
              <div className="action-home-banner">
                <a
                  className="btn-home-banner"
                  href="https://the-swan.myharavan.com/collections/dong-ho"
                  aria-label="Mua ngay"
                >
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionHeading text-center m-5">
          <h3>Danh mục sản phẩm</h3>{" "}
        </div>
        <div className="container-fluid  text-center">
          <div className="row mx-5">
            <div className="col">
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/img_item_category_1.jpg?v=41"
                className="d-block w-100"
                alt=""
              />
              <p className="title-category">Đồng hồ nam</p>
            </div>
            <div className="col">
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/img_item_category_2.jpg?v=41"
                className="d-block w-100"
                alt=""
              />
              <p className="title-category">Nhẫn</p>
            </div>
            <div className="col">
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/img_item_category_3.jpg?v=41"
                className="d-block w-100"
                alt=""
              />
              <p className="title-category">Vòng tay</p>
            </div>
            <div className="col">
              <img
                src="https://theme.hstatic.net/200000593853/1001115480/14/img_item_category_5.jpg?v=41"
                className="d-block w-100"
                alt=""
              />
              <p className="title-category">Hoa tai</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button role="button" className="owl-dot active" aria-label="1">
            <span></span>
          </button>
        </div>
        <div classname="container-fuild">
          <h3 className="text-center my-5">
            <a>Trang sức</a>
          </h3>
          <div className="row mx-5">
            <div className="col">
              <ProductCart
                title="Bông Tai Ngọc Trai Cao Cấp B2344 Cỡ Hạt 7x8 Ly"
                imageSrc="https://product.hstatic.net/200000593853/product/t-19_478c7b4f81fd49cab1b9e898677daddd_571f8fec8d064c8383a551ebf8c0a1ea_f44701f2ac0e49c1af970498306ca644_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/t-20_0a7bbcacb79041c397392e138c7ac2fe_385e2dd3585148c49700e83bc68ddbdb_454863bb852540ac917605a07f4c4a0f_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
            <div className="col">
              <ProductCart
                title=" Nhẫn nữ S925 thời trang cao cấp"
                imageSrc="https://product.hstatic.net/200000593853/product/-2-1_38697d29d9b44de28cae1ab253e660e0_e0212137411644cd8ca4889df4dd416a_577747c5d25848c083bda5db0c600c49_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/-2-3_5d367e22b5c14455bc83d40c7360573e_19f94bd8d22f4683a449755c3dc7e5f1_1583df7899c24923bb99e30257724afb_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
            <div className="col">
              <ProductCart
                title="Cài áo đính đá cao cấp Trâm Hoa"
                imageSrc="https://product.hstatic.net/200000593853/product/t-16_cc80f063576a4d71b01a8374aa8e9b1f_8cdb150b090a4860bc0911c470dc576f_e60e405c80ab4f5dae297d8439949f9c_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/t-18_21d098d6d9ab4cf19cb575e2c2f62bf0_2d14e1b64d6444928e6baccff8db6ac1_d3fff4b1846945b092b6ce755fc68e4d_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
            <div className="col">
              <ProductCart
                title="Cài áo trái tim pha lê bạch kim"
                imageSrc="https://product.hstatic.net/200000593853/product/t-16_be6a3067418b4fe192cf3ae54bdb9001_96779eea5a134c72baa4e50433415e23_6fbf1f2ae3fb40d699d31ae50e1d2c96_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/ct-3_76db746d854642ad92c8393cce53cdac_5f2b998569b94ae880e82a8cb51306a4_a04ebc80b1c24c859b5eebe1d32f97c2_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
            <div className="col">
              <ProductCart
                title="Nhẫn Bạc đính đá ECZ Swarovski"
                imageSrc="https://product.hstatic.net/200000593853/product/t-13_246e8401aaad467dad8d734a9fea815f_d944e585edfe49dc81d443d2d9233356_18051b337b7140419eae33b0b06d6d56_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/ct-5_1e1f087c94b641159513842d439d83bb_17264f4e5859416894e8bc10fc63f902_635e19679a104f7ab946eac8e81b84ef_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
          </div>
        </div>
        <div classname="container-fuild">
          <div className="row mx-5 mt-3">
            <div className="col">
              <ProductCart
                title="Bông Tai Ngọc Trai Cao Cấp B2344 Cỡ Hạt 7x8 Ly"
                imageSrc="https://product.hstatic.net/200000593853/product/ct-1_d00d6700d1544757bc86258670b8e3db_3beea28b27f242f781feca26234b90fc_0890176ae901426fb98bf7b80d12739c_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/-2-1_c99df8b4efbe4541966d708bde148ba8_9a704ded6ad543bc8dd993e9a2818ef5_45e110b3d76a4aad9fa576ca30f157de_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
            <div className="col">
              <ProductCart
                title="Nhẫn nữ S925 thời trang cao cấp"
                imageSrc="https://product.hstatic.net/200000593853/product/t-14_c7b0594ffb2d453d8d6d7630a05e4051_5d1385a7f99f40409577dca081f09d11_07a8f21ad0af4521b6c9adbe5f70e701_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/ct-2_4e144f93933944de8502a41dbbb5e981_f0dfcc6123fa4025a075be2db2a35f5c_a08cb691c8bf48cb80ebf4c68e48a91e_master.jpg"
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
                title="Cài áo trái tim pha lê bạch kim"
                imageSrc="https://product.hstatic.net/200000593853/product/ct-9_0716f1865fc6415eaeef2f435f37a846_0fa42343bc9c461d9e678f301f1a5302_2a903c2b036541b1a7dd1648f8332ba8_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/ct-5_e72312edcf8847a592238dbcb3eb7ff5_a1223f75854140db92a91776fe351fa9_384735c53d0046b884adfb7a09e1a869_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
            <div className="col">
              <ProductCart
                title="Nhẫn Bạc đính đá ECZ Swarovski"
                imageSrc="https://product.hstatic.net/200000593853/product/ct-9_0716f1865fc6415eaeef2f435f37a846_0fa42343bc9c461d9e678f301f1a5302_2a903c2b036541b1a7dd1648f8332ba8_master.jpg"
                imageSrc1="https://product.hstatic.net/200000593853/product/ct-5_e72312edcf8847a592238dbcb3eb7ff5_a1223f75854140db92a91776fe351fa9_384735c53d0046b884adfb7a09e1a869_master.jpg"
                price="Liên hệ báo giá"
              />
            </div>
          </div>
          <div className="wraplist-ctas text-center">
            <a
              href="/collections/trang-suc"
              className="btn-collection button btnwhite dark mx-2"
            >
              Xem thêm sản phẩm
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"></path>
              </svg>
            </a>
          </div>
          <div className="container text-center mt-5">
            <div className="row align-items-center">
              <div className="col">
                <img
                  width="100%"
                  height="328.65"
                  src="https://theme.hstatic.net/200000593853/1001115480/14/img_banner_bottom_desktop_1.jpg?v=41"
                  alt=""
                />
              </div>
              <div className="col">
                <div className="info-banner-bottom">
                  <div className="title-text-banner">
                    <h4>
                      <a
                        className="text-decoration-none text-dark fs-1"
                        href="/collections/all"
                        aria-label="ĐỒ TRANG SỨC ĐỘC QUYỀN"
                      >
                        ĐỒ TRANG SỨC ĐỘC QUYỀN
                      </a>
                    </h4>
                  </div>
                  <p className="des-text-banner">
                    Ngày nay, thế giới trang sức nam, nữ chính hãng rất đẹp, đa
                    dạng với nhiều kiểu dáng, chất liệu khác nhau (vàng, bạc,
                    đính đá), từ vòng tay, hoa tai, dây chuyền cho đến cả nhẫn.
                  </p>
                  <div className="action-banner-bottom">
                    <a
                      className="btn-home-banner"
                      href="/collections/all"
                      aria-label="Đồ trang sức độc quyền"
                    >
                      Xem ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">
                <div className="info-banner-bottom">
                  <div className="title-text-banner">
                    <h4>
                      <a
                        className="text-decoration-none text-dark fs-1"
                        href="/collections/all"
                        aria-label="Đồ trang sức độc quyền"
                      >
                        VÒNG TAY, LẮC TAY
                      </a>
                    </h4>
                  </div>
                  <p className="des-text-banner">
                    Với chất liệu làm từ thép không gỉ 316L, đi kèm với đó là
                    lớp mạ vàng hồng thời thượng bên ngoài (tùy phiên bản),
                    những chiếc vòng tay, lắc tay đến từ thương hiệu Daniel
                    Wellington đã tạo nên cơn sốt không hề nhỏ trên thị trường
                    kể từ thời điểm ra mắt.
                  </p>
                  <div className="action-banner-bottom">
                    <a
                      className="btn-home-banner"
                      href="/collections/all"
                      aria-label="Đồ trang sức độc quyền"
                    >
                      Xem ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <img
                  width="100%"
                  height="328.65"
                  src="https://theme.hstatic.net/200000593853/1001115480/14/img_banner_bottom_desktop_1.jpg?v=41"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div classname="container-fuild">
            <h3 className="text-center my-5">
              <a>Đồng hồ</a>
            </h3>
            <div className="row mx-5">
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
            <div className="row mx-5 my-3">
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
          <div className="wraplist-ctas text-center">
            <a
              href="/collections/trang-suc"
              className="btn-collection button btnwhite dark mx-2"
            >
              Xem thêm sản phẩm
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"></path>
              </svg>
            </a>
          </div>
          <div className="container-fuild">
            <div className="sectionHeading text-center my-5">
              <h3>
                <a
                  className="text-decoration-none text-body"
                  href="/blogs/news"
                >
                  Tin tức nổi bật
                </a>
              </h3>
            </div>
            <div className="container-fuild text-center">
              <div className="row mx-5">
                <div className="col">
                  <GuideCart
                    article="Hướng dẫn cách tạo mục lục bài viết"
                    shortArticle="Trong bài viết này, tôi sẽ hướng dẫn bạn cách tạo mục lục bài viết siêu đơn giản, không phải..."
                    image="https://file.hstatic.net/200000593853/article/blog-img-2_993d9da631724c61b538ba9210cc0b0e_grande.jpeg"
                  />
                </div>
                <div className="col">
                  <GuideCart
                    article="Hướng dẫn cách tạo mục lục bài viết"
                    shortArticle="Trong bài viết này, tôi sẽ hướng dẫn bạn cách tạo mục lục bài viết siêu đơn giản, không phải..."
                    image="https://file.hstatic.net/200000593853/article/blog-img-2_993d9da631724c61b538ba9210cc0b0e_grande.jpeg"
                  />
                </div>
                <div className="col">
                  <GuideCart
                    article="Hướng dẫn cách tạo mục lục bài viết"
                    shortArticle="Trong bài viết này, tôi sẽ hướng dẫn bạn cách tạo mục lục bài viết siêu đơn giản, không phải..."
                    image="https://file.hstatic.net/200000593853/article/blog-img-2_993d9da631724c61b538ba9210cc0b0e_grande.jpeg"
                  />
                </div>
              </div>
            </div>
            <section className="section-home-intro bg-secondary pt-5 text-center lh-2 my-5">
              <div className="container">
                <div className="home-intro">
                  <div className="home-intro--titles mb-5">
                    <h2>Về The Swan</h2>
                  </div>
                  <div className="home-intro--content pb-5">
                    <p>
                      Mỗi một người phụ nữ đều mang trong mình nét đẹp riêng
                      &amp; xứng đáng được ngưỡng mộ, được tôn vinh và được tự
                      tin với chính con người mình. Phụ nữ luôn xứng đáng với
                      những điều trọn vẹn nhất cho cuộc sống của mình: Hạnh phúc
                      trọn vẹn, vẻ đẹp trọn vẹn và còn nhiều hơn thế. The Swan
                      hơn cả một thương hiệu trang sức, mà còn là đại diện cho
                      một phong cách sống của những giá trị hoàn mỹ xứng đáng
                      nhất dành cho phụ nữ.
                    </p>
                    <p>"TRANG SỨC The Swan – CHO PHỤ NỮ LUÔN TRỌN VẸN"</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-home-policy text-center  ">
              <div className="container">
                <div className="row">
                  <div className="item-policy col-6 col-lg-3">
                    <div className="wrapper-media">
                      <div className="media-policy mb-3">
                        <a href="/pages/about-us">
                          <img
                            style={{ width: "45px", height: "45px" }}
                            className="ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_1.jpg?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_1.jpg?v=43"
                            alt="Hỗ trợ 24/7"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info-policy">
                      <h4 className="mb-3">
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us"
                        >
                          Hỗ trợ 24/7
                        </a>
                      </h4>
                      <p>Hotline hỗ trợ 1900.000.XXX</p>
                    </div>
                  </div>
                  <div className="item-policy col-6 col-lg-3">
                    <div className="wrapper-media">
                      <div className="media-policy mb-3">
                        <a href="/pages/about-us">
                          <img
                            style={{ width: "45px", height: "45px" }}
                            className=" lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_2.jpg?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_2.jpg?v=43"
                            alt="Giao hàng miễn phí"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info-policy">
                      <h4 className="mb-3">
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us"
                        >
                          Giao hàng miễn phí
                        </a>
                      </h4>
                      <p>
                        Thời gian giao hàng nhanh chóng, từ 3 - 5 ngày làm việc
                      </p>
                    </div>
                  </div>
                  <div className="item-policy col-6 col-lg-3">
                    <div className="wrapper-media">
                      <div className="media-policy mb-3">
                        <a href="/pages/about-us">
                          <img
                            style={{ width: "45px", height: "45px" }}
                            className=" lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_3.jpg?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_3.jpg?v=43"
                            alt="Thanh toán đa dạng"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info-policy">
                      <h4 className="mb-3">
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us"
                        >
                          Thanh toán đa dạng
                        </a>
                      </h4>
                      <p>Chấp nhận thanh toán COD, Momo, Banking</p>
                    </div>
                  </div>
                  <div className="item-policy col-6 col-lg-3">
                    <div className="wrapper-media">
                      <div className="media-policy mb-3">
                        <a href="/pages/about-us">
                          <img
                            style={{ width: "45px", height: "45px" }}
                            className=" lazyloaded"
                            data-src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_4.jpg?v=43"
                            src="//theme.hstatic.net/200000593853/1001115480/14/img_item_policy_4.jpg?v=43"
                            alt="Đổi trả hàng dễ dàng"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info-policy">
                      <h4 className="mb-3">
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us"
                        >
                          Đổi trả hàng dễ dàng
                        </a>
                      </h4>
                      <p>Thời gian trả hàng lên tới 30 ngày</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Home;