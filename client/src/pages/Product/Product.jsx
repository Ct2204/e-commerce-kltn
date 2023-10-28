import React from "react";
import './Product.css'
import ProductCart from "../../components/ProductCart";
import {FaFilter} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';



const Product = () => {
    return (
      <>
        <div className="container-fuild px-2 pt-3 border-product">
          <div className="breadcrumb-list  ">
            <ol
              className="breadcrumb breadcrumb-arrows align-items-center"
              itemscope=""
              itemtype="http://schema.org/BreadcrumbList"
            >
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a
                  className="text-decoration-none item text-body mx-4"
                  href="/"
                  target="_self"
                  itemprop="item"
                >
                  <span className="text-secondary" itemprop="name">
                    Trang chủ
                  </span>
                </a>
                <meta itemprop="position" content="1" />
              </li>

              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a
                  className="text-decoration-none item text-body"
                  href="https://the-swan.myharavan.com/collections/trang-suc"
                  target="_self"
                  itemprop="item"
                >
                  <span className="text-secondary" itemprop="name">
                    /&ensp;&ensp;&ensp;Trang sức
                  </span>
                </a>
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
        <div className="container-fuild">
        <div className="row d-flex flex-wrap">
          <div className="col">
            <img
            style={{height:"100%", width: "100%"}}
              src="//theme.hstatic.net/200000593853/1001115480/14/collection_banner.jpg?v=43"
              alt="Products"
            />
          </div>
          <div className="col d-flex justify-content-start ">
            <h1 className="d-flex align-items-center">Tất cả sản phẩm</h1>
          </div>
        </div>
        </div>
        <div className="d-flex justify-content-between my-5 search-feature">
            <div className="mx-5">Bộ lọc <FaFilter/></div>
            <div className="mx-5" >
            <Dropdown>
      <Dropdown.Toggle className="dropdown" variant="light" id="dropdown-basic">
         Sắp xếp
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Giá: Tăng dần</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Giá: Giảm dần</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tên: A-Z</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tên: Z-A</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
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
      </>
    );

}

export default Product;
