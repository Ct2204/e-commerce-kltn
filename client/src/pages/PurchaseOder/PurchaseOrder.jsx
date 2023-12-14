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
import User from "../User/User.jsx";
import { getOrderByStatus } from "../../services/OrderService.js";
import { log } from "../../store/reducers/auth.js";

const PurchaseOrder = () => {


  const [orderProduct, setOrderProduct] = useState([])

  const [statusOrder, setStatusOrder] = useState("PENDING")
 


  const handleToGetProductByOrderStatus = async () => {
    const responseData = await getOrderByStatus(statusOrder);
    setOrderProduct(responseData)
  }
  useEffect(() => {
    handleToGetProductByOrderStatus()
  },[statusOrder])


  return (
    <div className="fontSizePageUser">
      <div className="container py-5">
        <div className="row">
        
          
        <div className="col-2">
            <User/>
            </div>
          <div className="col-10">
            <div className="d-flex row text-center">
              <Tabs
                defaultActiveKey="tất cả"
                id="uncontrolled-tab-example"
                className="mb-3 col"
              >
               
                <Tab
                  className="col"
                  eventKey="chờ thanh toán"
                  title={<p className="col text-body fs-5"
                  onClick={()=>{setStatusOrder("PENDING")}}
                  >Chờ thanh toán</p>}
                  
                ></Tab>
                <Tab
                  className="col"
                  eventKey="vận chuyển"
                  title={<p className=" col text-body fs-5"
                  onClick={() => { setStatusOrder("SHIPPED")}}>Vận chuyển</p>}
                 
                ></Tab>
                <Tab
                  className="col"
                  eventKey="chờ giao hàng"
                  title={<p className=" col text-body fs-5"
                  onClick={()=>{setStatusOrder("DELIVERED")}}
                  >Chờ giao hàng</p>}
                  
                  
                ></Tab>
                <Tab
                  className="col"
                  eventKey="hoàn thành"
                  title={<p className="col text-body fs-5"
                  onClick={()=>{setStatusOrder("PAID")}}
                  >Hoàn thành</p>}
                  
                ></Tab>
                <Tab
                  className="col"
                  eventKey="đã huỷ"
                  title={<p className="col text-body fs-5 "
                  onClick={()=>{setStatusOrder("CANCELED")}}
                  >Đã huỷ</p>}
                  
                ></Tab>
                <Tab
                  className="col"
                  eventKey="trả hàng"
                  title={<p className="col text-body fs-5"
                  onClick={()=>{setStatusOrder("CLOSED")}}
                  >Trả hàng</p>}
                  
                ></Tab>
               
              </Tabs>
            </div>
            <div>

              

              {
                orderProduct.length === 0 ? (
                  <div className="info-image">
                  <img
                    style={{ width: "100%" }}
                    data-src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=43"
                    src="//theme.hstatic.net/200000593853/1001115480/14/cart_banner_image.jpg?v=43"
                    alt="Giỏ hàng của bạn đang trống"
                  />
                  <p className="text-center" style={{ fontSize: "30px" }}>
                    Chưa có sản phẩm trong giỏ hàng...
                  </p>
                </div>
                ) :
                orderProduct.map((products, idx) => (
                  <div className="row background-purchase" key={idx}>
                    <div className="d-flex col-10">
                      <div className="text-start">
                        <img
                          src={products.url}
                          style={{ width: "82px", height: "82px" }}
                        />
                      </div>
                      <div className="text-start">
                        <div>
                          <div className="iJlxsT">
                            <span className="x5GTyN" tabIndex="0">
                             {products.title}
                            </span>
                          </div>
                        </div>
                        <div>
                         
                          <div className="_3F1-5M" tabIndex="0">
                            x{products.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                      
                      <span className="text-danger">₫{products.price }</span>
                    </div>
                  </div>
                ))
               }
              
              
              



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
