import React from "react";
import { Accordion } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <div className="">
        <div className="pt-3 border-product">
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
                    /&ensp;&ensp;&ensp;Tin tức
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
            fontSize: "14px",
            fontFamily: " Tinos, sans-serif",
          }}
        >
          <div className="row">
            <div
              className="col-6 py-2"
              style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="mx-2">
                <div class="article-image">
                  <a
                    href="/blogs/news/giay-boot-la-gi-cach-phan-loai-giay-boot-ma-chi-em-can-biet"
                    class="blog-post-thumbnail"
                    title="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    rel="nofollow"
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="//file.hstatic.net/200000593853/article/blog01_90292ca06f044bdc98885cccc35c4745_1024x1024.jpg"
                      alt="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    />
                  </a>
                </div>
              </div>
              <div class=" mx-2">
                <div class="mt-2">
                  <h3 class="fs-5 fw-bold">
                    <a
                      className="text-decoration-none text-body"
                      href="/blogs/news/giay-boot-la-gi-cach-phan-loai-giay-boot-ma-chi-em-can-biet"
                      title="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    >
                      Giày boot là gì? Cách phân loại giày boot mà chị em cần
                      biết
                    </a>
                  </h3>
                </div>

                <p class="fs-6">
                  Giày boot là một trong những phụ kiện thời trang không thể
                  thiếu dành cho phái nữ vào mùa đông giá rét. Vậy giày boot là
                  gì? Chúng có những loại nào? Cách phối đồ...
                </p>

                <div class="" style={{ color: "#74839f" }}>
                  <span class="author">bởi: The Swan</span>
                  <span class="mx-4">
                    <time pubdate="" datetime="16 Tháng 01, 2023">
                      16 Tháng 01, 2023
                    </time>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-6 py-2"
              style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="mx-2">
                <div class="article-image">
                  <a
                    href="/blogs/news/huong-dan-cach-tao-muc-luc-bai-viet"
                    class="blog-post-thumbnail"
                    title="Hướng dẫn cách tạo mục lục bài viết"
                    rel="nofollow"
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="//file.hstatic.net/200000593853/article/blog-img-2_993d9da631724c61b538ba9210cc0b0e_grande.jpeg"
                      alt="Hướng dẫn cách tạo mục lục bài viết"
                    />
                  </a>
                </div>
              </div>
              <div class="mx-2">
                <div class="mt-2">
                  <h3 class="fs-5 fw-bold">
                    <a
                      className="text-decoration-none text-body"
                      href="/blogs/news/giay-boot-la-gi-cach-phan-loai-giay-boot-ma-chi-em-can-biet"
                      title="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    >
                      Hướng dẫn cách tạo mục lục bài viết ở trang chủ
                    </a>
                  </h3>
                </div>

                <p class="fs-6">
                  Trong bài viết này, tôi sẽ hướng dẫn bạn cách tạo mục lục bài
                  viết siêu đơn giản, không phải viết code hay thiết lập lằng
                  nhằng gì hết...
                </p>

                <div class="" style={{ color: "#74839f" }}>
                  <span class="author">bởi: The Swan</span>
                  <span class="mx-4">
                    <time pubdate="" datetime="16 Tháng 01, 2023">
                      17 Tháng 01, 2023
                    </time>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-6 py-2"
              style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="mx-2">
                <div class="article-image">
                  <a
                    href="/blogs/news/giay-boot-la-gi-cach-phan-loai-giay-boot-ma-chi-em-can-biet"
                    class="blog-post-thumbnail"
                    title="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    rel="nofollow"
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="//file.hstatic.net/200000593853/article/blog-img-4_297f5b2eed3f4cdc998fd1efec06b708_grande.jpeg"
                      alt="Những Loại Đá Quý Đặc Biệt Giúp Thu Hút Và Tăng Cường Tình Yêu"
                    />
                  </a>
                </div>
              </div>
              <div class="mx-2">
                <div class="mt-2">
                  <h3 class="fs-5 fw-bold">
                    <a
                      className="text-decoration-none text-body"
                      href="/blogs/news/giay-boot-la-gi-cach-phan-loai-giay-boot-ma-chi-em-can-biet"
                      title="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    >
                      Những Loại Đá Quý Đặc Biệt Giúp Thu Hút Và Tăng Cường Tình
                      Yêu
                    </a>
                  </h3>
                </div>

                <p class="fs-6">
                  Bạn có biết rằng một số loại đá quý và bán quý đặc biệt có
                  thêm tác dụng hỗ trợ và cân bằng tình yêu của bạn và người ấy?
                  Đá loại...
                </p>

                <div class="" style={{ color: "#74839f" }}>
                  <span class="author">bởi: The Swan</span>
                  <span class="mx-4">
                    <time pubdate="" datetime="16 Tháng 01, 2023">
                      17 Tháng 01, 2023
                    </time>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-6 py-2 "
              style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="mx-2">
                <div class="article-image">
                  <a
                    href="/blogs/news/huong-dan-cach-tao-muc-luc-bai-viet"
                    class="blog-post-thumbnail"
                    title="Hướng dẫn cách tạo mục lục bài viết"
                    rel="nofollow"
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="//file.hstatic.net/200000593853/article/blog-img-6_7fd64dc982914735967cdf0779b27ba2_grande.jpeg"
                      alt="Đá Feldspar Và Những Ứng Dụng Tại Việt Nam Và Thế Giới"
                    />
                  </a>
                </div>
              </div>
              <div class="mx-2">
                <div class="mt-2">
                  <h3 class="fs-5 fw-bold">
                    <a
                      className="text-decoration-none text-body"
                      href="/blogs/news/giay-boot-la-gi-cach-phan-loai-giay-boot-ma-chi-em-can-biet"
                      title="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                    >
                      Đá Feldspar Và Những Ứng Dụng Tại Việt Nam Và Thế Giới
                    </a>
                  </h3>
                </div>

                <p class="fs-6">
                  Đá Feldspar còn được gọi là còn gọi là tràng thạch hay đá bồ
                  tát, là tên gọi của một nhóm khoáng. Nó cấu tạo nên gần 60% vỏ
                  trá...
                </p>

                <div class="" style={{ color: "#74839f" }}>
                  <span class="author">bởi: The Swan</span>
                  <span class="mx-4">
                    <time pubdate="" datetime="16 Tháng 01, 2023">
                      17 Tháng 01, 2023
                    </time>
                  </span>
                </div>
              </div>
            </div>
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
              <Accordion.Item className="">
                <Accordion.Header className="fw-bold">
                  <strong>Bài viết mới nhất</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    class=""
                    style={{
                      fontSize: "12px",
                      fontFamily: "Tinos, sans-serif",
                    }}
                  >
                    <div class="">
                      <div
                        class="d-flex"
                        style={{
                          borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <div class="">
                          <a href="#">
                            <img
                              style={{ width: "90px", height: "53px" }}
                              src="//file.hstatic.net/200000593853/article/blog01_90292ca06f044bdc98885cccc35c4745_compact.jpg"
                              alt="Giày boot là gì? Cách phân loại giày boot mà chị em cần biết"
                            />
                          </a>
                        </div>
                        <div class="mx-2">
                          <a
                            href="#"
                            className="text-decoration-none text-body"
                          >
                            Giày boot là gì? Cách phân loại giày boot mà chị em
                            cần biết
                          </a>
                          <p class="">
                            <span class="">Tin tức</span>

                            <span class="">- 16.01.2023</span>
                          </p>
                        </div>
                      </div>

                      <div
                        class="d-flex mt-3"
                        style={{
                          borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <div class="">
                          <a href="">
                            <img
                              style={{ width: "90px", height: "53px" }}
                              src="//file.hstatic.net/200000593853/article/blog-img-2_993d9da631724c61b538ba9210cc0b0e_compact.jpeg"
                              alt="Hướng dẫn cách tạo mục lục bài viết"
                            />
                          </a>
                        </div>
                        <div class="mx-2">
                          <a
                            href="#"
                            className="text-decoration-none text-body"
                          >
                            Hướng dẫn cách tạo mục lục bài viết
                          </a>

                          <p class="">
                            <span class="">Tin tức</span>

                            <span class="">- 17.10.2022</span>
                          </p>
                        </div>
                      </div>

                      <div
                        class="d-flex mt-3"
                        style={{
                          borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
                        }}
                      >
                        <div class="">
                          <a href="/blogs/news/nhung-loai-da-quy-dac-biet-giup-thu-hut-va-tang-cuong-tinh-yeu">
                            <img
                              style={{ width: "90px", height: "53px" }}
                              src="//file.hstatic.net/200000593853/article/blog-img-4_297f5b2eed3f4cdc998fd1efec06b708_compact.jpeg"
                              alt="Những Loại Đá Quý Đặc Biệt Giúp Thu Hút Và Tăng Cường Tình Yêu"
                            />
                          </a>
                        </div>
                        <div class="mx-2">
                          <a
                            href="#"
                            className="text-decoration-none text-body"
                          >
                            Những Loại Đá Quý Đặc Biệt Giúp Thu Hút Tình Yêu
                          </a>

                          <p class="">
                            <span class="">Tin tức</span>

                            <span class="">- 17.10.2022</span>
                          </p>
                        </div>
                      </div>

                      <div class="d-flex mt-3">
                        <div class="">
                          <a href="#">
                            <img
                              style={{ width: "90px", height: "53px" }}
                              src="//file.hstatic.net/200000593853/article/blog-img-6_7fd64dc982914735967cdf0779b27ba2_compact.jpeg"
                              alt="Đá Feldspar Và Những Ứng Dụng Tại Việt Nam Và Thế Giới"
                            />
                          </a>
                        </div>
                        <div class="mx-2">
                          <a
                            href="#"
                            className="text-decoration-none text-body"
                          >
                            Đá Feldspar Và Những Ứng Dụng Tại Việt Nam Và Thế
                            Giới
                          </a>

                          <p class="">
                            <span class="">Tin tức</span>

                            <span class="">- 17.10.2022</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default News;
