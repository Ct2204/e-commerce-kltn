import React, { useEffect, useState } from "react";
import "./Address.css";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  deleteAddressOfUserById,
  getAddressOfUserById,
  postUserAddress,
  updateAddressOfUser,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import User from "../User/User.jsx";

const Address = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState([]);

  const userId = useSelector((state) => state.auth.userInfo.user_id);

  const [addressId, setAddressId] = useState(userId);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formAddress, setFormAddress] = useState({
    fullName: "",
    company: "HCMUTE",
    phone: "",
    street: "",
    ward: "",
    district: "",
    region: "",
    status: "NOT_DEFAULT",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (addressId !== userId) {
      setFormAddress((prevFormAddress) => ({
        ...prevFormAddress,
        userId: userId,
        [name]: value,
      }));
    } else {
      setFormAddress((prevFormAddress) => {
        const { userId, ...rest } = prevFormAddress;
        return {
          ...rest,
          [name]: value,
        };
      });
    }
  };

  const handleGetAddressOfUserById = async (userId) => {
    try {
      setIsLoading(true);
      const responseData = await getAddressOfUserById(userId);
      if (responseData) {
        setAddress(responseData.data);
      } else {
        console.error("Get failed");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in failed get profile of user: ", err);
      setIsLoading(false);
    }
  };

  const handlePostUserAddress = async (data, id) => {
    try {
      setIsLoading(true);
      const responseData = await postUserAddress(data, id);
      if (responseData) {
        handleClose();
        toast.success("Add sucessful.");
        handleGetAddressOfUserById(userId);
      } else {
        console.error("Get failed");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in failed get profile of user: ", err);
      setIsLoading(false);
    }
  };

  const handleUpdateAddressOfUser = async (data, id) => {
    try {
      setIsLoading(true);
      const responseData = await updateAddressOfUser(data, id);
      if (responseData) {
        handleClose();
        toast.success("Update Successful.");
        handleGetAddressOfUserById(userId);
      } else {
        console.error("Get failed");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in failed get profile of user: ", err);
      setIsLoading(false);
    }
  };

  const handleDeleteAddressOfUserById = async (id) => {
    try {
      setIsLoading(true);
      const responseData = await deleteAddressOfUserById(id);
      if (responseData) {
        toast.warn("Delete Successful.");
        handleGetAddressOfUserById(userId);
      } else {
        console.error("Get failed");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in failed delete address of user: ", err);
      setIsLoading(false);
    }
  };

  const handleShowButton = (id) => {
    setAddressId(id);
    handleShow(true);
  };

  const handleLoadData = (e) => {
    console.log(formAddress);
    handlePostUserAddress(formAddress, userId);
  };

  useEffect(() => {
    if (userId) handleGetAddressOfUserById(userId);
  }, [userId]);

  console.log(formAddress);

  return (
    <>
      <div className="fontSizePageUser">
        <div className="container py-5 ">
          <div className="row" >
           
            <div className="col-2">
            <User/>
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Địa chỉ mới</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="mb-3 row" style={{ width: "400px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-4 col-form-label"
                    >
                      Họ và tên
                    </label>
                    <div className="col-8">
                      <input
                        type="text"
                        name="fullName"
                        // value
                        placeHolder="Họ và tên"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "400px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-4 col-form-label"
                    >
                      Số điện thoại
                    </label>
                    <div className="col-8">
                      <input
                        type="number"
                        name="phone"
                        placeHolder="Số điện thoại"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "400px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-4 col-form-label"
                    >
                      Street
                    </label>
                    <div className="col-8">
                      <input
                        type="text"
                        name="street"
                        placeHolder="Tên đường"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "400px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-4 col-form-label"
                    >
                      Ward
                    </label>
                    <div className="col-8">
                      <input
                        type="text"
                        name="ward"
                        placeHolder="Tên phường"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "400px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-4 col-form-label"
                    >
                      District
                    </label>
                    <div className="col-8">
                      <input
                        type="text"
                        name="district"
                        placeHolder="Tên quận"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "400px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-4 col-form-label"
                    >
                      Region
                    </label>
                    <div className="col-8">
                      <input
                        type="text"
                        name="region"
                        placeHolder="Tên tỉnh"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Trở lại
                </Button>
                {userId === addressId ? (
                  <Button variant="primary" onClick={(e) => handleLoadData(e)}>
                    Hoàn thành
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={(e) =>
                      handleUpdateAddressOfUser(formAddress, addressId)
                    }
                  >
                    Cập nhật
                  </Button>
                )}
              </Modal.Footer>
            </Modal>

            <div className="col-10 bg-white highlight-container pb-5">
              <div className="myProfile pb-3 d-flex">
                <div className="m-4 fs-6 fw-bold">Địa chỉ của tôi</div>
                <div className="ms-auto m-4">
                  <button
                    onClick={(e) => handleShowButton(userId)}
                    style={{
                      padding: "0 20px",
                      backgroundColor: "#216fdb",
                      border: "none",
                      borderRadius: "6px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }}
                    className="text-white shopee-button-solid shopee-button-solid--primary ErE1Vh"
                  >
                    <div className="d-flex">
                      <div className="">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div>Thêm địa chỉ mới</div>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div className="fs-6 m-4">Địa chỉ</div>
              </div>
              {isLoading ? (
                <h1>Đang load dữ liệu</h1>
              ) : (
                <div className=" ">
                  {Array.from(address).map((aAddress, idx) => (
                    <div className="border-items-address mb-5" key={idx}>
                      <div className="d-flex">
                        <div className="d-flex align-items-center">
                          <div className="mx-4 fw-bold border-name">
                            {aAddress.fullName}
                          </div>
                          <div className="">(+84) {aAddress.phone}</div>
                        </div>
                        <div className="ms-auto">
                          <button
                            style={{
                              padding: "0 20px",
                              backgroundColor: "#216fdb",
                              border: "none",
                              borderRadius: "6px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                            }}
                            className="text-primary bg-white "
                            onClick={(e) => handleShowButton(aAddress.id)}
                          >
                            Cập nhật
                          </button>
                          <button
                            style={{
                              padding: "0 20px",
                              backgroundColor: "#216fdb",
                              border: "none",
                              borderRadius: "6px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                            }}
                            className="text-primary bg-white"
                            onClick={(e) =>
                              handleDeleteAddressOfUserById(aAddress.id)
                            }
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="">
                          <div className=" mx-4">
                            <div className="">{aAddress.street}</div>
                            <div className="d-flex">
                              <div>{aAddress.ward},</div>
                              <div className="mx-2">{aAddress.district},</div>
                              <div>{aAddress.region}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="TArgaE mt-2">
                        <span className="text-primary border border-primary px-2 py-1 mx-4 ">
                          Mặc định
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
