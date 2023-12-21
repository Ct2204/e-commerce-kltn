import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <>
      <div className="">
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
                  <Link
                    className="text-secondary text-decoration-none"
                    to="/"
                    itemprop="name"
                  >
                    Trang chủ
                  </Link>
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
                    /&ensp;&ensp;&ensp;Giới thiệu
                  </span>
                </a>
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-8 mt-5 mx-5 "
          style={{
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.08)",
            fontSize: "14px",
            fontFamily: " Tinos, sans-serif",
          }}
        >
          <div class="mt-3">
            <h4>Giới thiệu</h4>
          </div>
          <div className="my-3">
            <p>
              Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn.
              Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng,
              thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng
              khi mua hàng trên website của bạn.
            </p>
            <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
          </div>
          <div>
            <ul>
              <li className="my-2">
                <span>Bạn là ai</span>
              </li>
              <li>
                <span>Giá trị kinh doanh của bạn là gì</span>
              </li>
              <li className="my-2">
                <span>Địa chỉ cửa hàng</span>
              </li>
              <li>
                <span>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</span>
              </li>
              <li className="my-2">
                <span>Bạn kinh doanh ngành hàng online được bao lâu</span>
              </li>
              <li>
                <span>Đội ngũ của bạn gồm những ai</span>
              </li>
              <li className="my-2">
                <span>Thông tin liên hệ</span>
              </li>
              <li>
                <span>
                  Liên kết đến các trang mạng xã hội (Twitter, Facebook)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-3 mt-5"
          style={{
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.08)",
            fontSize: "14px",
            fontFamily: " Tinos, sans-serif",
          }}
        >
          <div className="mt-3">
            <Accordion className="">
              <Accordion.Item
                className="border-0"
                style={{ borderBottom: "1px solid black" }}
              >
                <Accordion.Header className="fw-bold border-0 ">
                  <strong>Danh mục page</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="sidebox-content sidebox-content-togged">
                    <ul class="list-unstyled">
                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/"
                          title="Trang chủ"
                        >
                          Trang chủ{" "}
                          <span class="icon-plus-submenu plus-nClick1"></span>
                        </a>
                        <ul class="submenu-links"></ul>
                      </li>

                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/collections/all"
                          title="Sản phẩm"
                        >
                          Sản phẩm{" "}
                          <span class="icon-plus-submenu plus-nClick1"></span>
                        </a>
                      </li>

                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/products/mayfair-rose-gold"
                          title="Trang sản phẩm"
                        >
                          Trang sản phẩm{" "}
                          <span class="icon-plus-submenu plus-nClick1"></span>
                        </a>
                      </li>

                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us"
                          title="Giới thiệu"
                        >
                          Giới thiệu{" "}
                          <span class="icon-plus-submenu plus-nClick1"></span>
                        </a>
                      </li>

                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/blogs/news"
                          title="Tin tức"
                        >
                          <span>Tin tức</span>
                        </a>
                      </li>

                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us"
                          title="Trang nội dung"
                        >
                          Trang nội dung{" "}
                          <span class="icon-plus-submenu plus-nClick1"></span>
                        </a>
                      </li>

                      <li
                        className="py-3"
                        style={{
                          borderBottom: "1px dashed rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <a
                          className="text-decoration-none text-body"
                          href="/pages/about-us/?view=landing-page-01"
                          title="Landing page"
                        >
                          <span>Landing page</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div class="my-3">
            <div class="groupbanner_image">
              <a class="groupbanner_image_link" href="/">
                <div class="groupbanner_image_block banner-hover-effect">
                  <picture>
                    <source
                      data-srcset="//theme.hstatic.net/200000593853/1001115480/14/page_banner_image.jpg?v=45"
                      srcset="//theme.hstatic.net/200000593853/1001115480/14/page_banner_image.jpg?v=45"
                    />
                    <img
                      style={{ width: "100%", height: "100%" }}
                      class=" ls-is-cached lazyloaded"
                      data-src="//theme.hstatic.net/200000593853/1001115480/14/page_banner_image.jpg?v=45"
                      src="//theme.hstatic.net/200000593853/1001115480/14/page_banner_image.jpg?v=45"
                      alt="the swan"
                    />
                  </picture>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
