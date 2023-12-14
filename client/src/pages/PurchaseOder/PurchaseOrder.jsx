import React, { useEffect, useRef, useState } from "react";
import "./PurchaseOrder.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getProfileOfUser,
  updateUserProfile,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { Button, Form, Tab, Tabs } from "react-bootstrap";

const PurchaseOrder = () => {
  return (
    <div className="fontSizePageUser">
      <div className="container py-5">
        <div className="row">
          <div className="col-2">
            <div className="d-flex profile-avatar pb-3">
              <a>
                <img
                  src=""
                  style={{ width: "48px", height: "48px" }}
                  className="rounded-circle"
                />
              </a>
              <div className="mx-3">
                <div className="fw-bold text-body">Trần Văn Thiên</div>
                <div>
                  <a
                    className="text-decoration-none text-body"
                    href="/user/account/profile"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                      className="edit-font"
                    >
                      <path
                        d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                        fill="#9B9B9B"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    Sửa hồ sơ
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="stardust-dropdown__item-header">
                <a

                  className="d-flex text-decoration-none"

                  href="/user/account/profile"
                >
                  <div className="account-image">
                    <img
                      src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div className="">
                    <span className="fw-bold text-body">Tài khoản của tôi</span>
                  </div>
                </a>
              </div>
            </div>
            <div>

              <div className="d-flex flex-column profile-address my-2">

                <a>Hồ Sơ</a>
                <Link
                  to="/user/address"
                  className="mt-2 text-decoration-none text-body"
                >
                  Địa Chỉ
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <div className="stardust-dropdown__item-header">
                <a

                  className="d-flex text-decoration-none"

                  href="/user/account/profile"
                >
                  <div className="account-image">
                    <img
                      src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div className="">
                    <span className="fw-bold text-body">Đơn mua</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="d-flex row text-center">
              <Tabs
                defaultActiveKey="tất cả"
                id="uncontrolled-tab-example"
                className="mb-3 col"
              >
                <Tab
                  className="col fs-6"
                  eventKey="tất cả"
                  title={<p className="text-body fs-5">Tất cả</p>}
                >
                  <div className="row background-purchase">
                    <div className="d-flex col-10">
                      <div className="text-start">
                        <img
                          src="https://down-vn.img.susercontent.com/file/3eba305ff31c3e12020e84ae69cd80b3_tn"
                          style={{ width: "82px", height: "82px" }}
                        />
                      </div>

                      <div className="text-start">
                        <div>
                          <div className="iJlxsT">
                            <span className="x5GTyN" tabindex="0">

                              Áo sơ mi tay ngắn nam nữ form rộng sơ mi cổ vest
                              unisex tay lỡ, chất vải lụa mịn chống nhăn
                            </span>
                          </div>
                        </div>
                        <div>

                          <div className="vb0b-P" tabindex="0">
                            Phân loại hàng: Be CV,L
                          </div>
                          <div className="_3F1-5M" tabindex="0">

                            x1
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 d-flex align-items-center">

                      <span className="text-decoration-line-through">
                        ₫140.000
                      </span>
                      <span className="text-danger">₫99.000</span>

                    </div>
                  </div>
                </Tab>
                <Tab
                  className="col"
                  eventKey="chờ thanh toán"
                  title={<p className="col text-body fs-5">Chờ thanh toán</p>}
                ></Tab>
                <Tab
                  className="col"
                  eventKey="vận chuyển"
                  title={<p className=" col text-body fs-5">Vận chuyển</p>}
                ></Tab>
                <Tab
                  className="col"
                  eventKey="chờ giao hàng"
                  title={<p className=" col text-body fs-5">Chờ giao hàng</p>}
                ></Tab>
                <Tab
                  className="col"
                  eventKey="hoàn thành"
                  title={<p className="col text-body fs-5">Hoàn thành</p>}
                ></Tab>
                <Tab
                  className="col"
                  eventKey="đã huỷ"
                  title={<p className="col text-body fs-5 ">Đã huỷ</p>}
                ></Tab>
                <Tab
                  className="col"
                  eventKey="trả hàng"
                  title={<p className="col text-body fs-5">Trả hàng</p>}
                ></Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
