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
          <div className="row">
            <div className="col-2">
              <div className="d-flex profile-avatar pb-3">
                <a>
                  <img
                    src="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
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
                    class="d-flex text-decoration-none"
                    href="/user/account/profile"
                  >
                    <div className="account-image">
                      <img
                        src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <div className="">
                      <span className="fw-bold text-body">
                        Tài khoản của tôi
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div class="d-flex flex-column profile-address my-2">
                  <Link
                    to="/user"
                    className="mt-2 text-decoration-none text-body"
                  >
                    Hồ sơ
                  </Link>
                  <a className="mt-2 text-decoration-none text-body">Địa Chỉ</a>
                </div>
              </div>
              <div className="mt-4">
                <div className="stardust-dropdown__item-header">
                  <a
                    class="d-flex text-decoration-none"
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
              <div class="myProfile pb-3 d-flex">
                <div className="m-4 fs-6 fw-bold">Địa chỉ của tôi</div>
                <div className="ms-auto m-4">
                  <button
                    onClick={(e) => handleShowButton(userId)}
                    class="shopee-button-solid shopee-button-solid--primary ErE1Vh"
                  >
                    <div class="d-flex">
                      <div class="">
                        <i class="fa-solid fa-plus"></i>
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
                <div class=" ">
                  {Array.from(address).map((aAddress, idx) => (
                    <div class="border-items-address mb-5" key={idx}>
                      <div class="d-flex">
                        <div class="d-flex align-items-center">
                          <div class="mx-4 fw-bold border-name">
                            {aAddress.fullName}
                          </div>
                          <div class="">(+84) {aAddress.phone}</div>
                        </div>
                        <div class="ms-auto">
                          <button
                            class=" text-primary bg-white "
                            onClick={(e) => handleShowButton(aAddress.id)}
                          >
                            Cập nhật
                          </button>
                          <button
                            class="text-primary bg-white"
                            onClick={(e) =>
                              handleDeleteAddressOfUserById(aAddress.id)
                            }
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="">
                          <div class=" mx-4">
                            <div class="">{aAddress.street}</div>
                            <div class="d-flex">
                              <div>{aAddress.ward},</div>
                              <div className="mx-2">{aAddress.district},</div>
                              <div>{aAddress.region}</div>
                            </div>
                          </div>
                        </div>
                        <div class="ms-auto border-adrress ">
                          <button class="bg-white text-body">
                            Thiết lập mặc định
                          </button>
                        </div>
                      </div>
                      <div class="TArgaE mt-2">
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
