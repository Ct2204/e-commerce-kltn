import React, { useEffect, useRef, useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getProfileOfUser,
  updateUserProfile,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";

const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [fullName, setFullName] = useState(userInfo.fullName);
  const [gender, setGender] = useState(userInfo.gender);

  const userId = useSelector((state) => state.auth.userInfo.user_id);

  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(
    "https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
  );

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Hủy URL cũ nếu có
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    // Kiểm tra nếu có tệp tin được chọn
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    // Đặt giá trị mặc định từ dữ liệu ngày sinh
    const birthday = userInfo.birthday;
    const parsedBirthday = new Date(birthday);

    setDay(parsedBirthday.getUTCDate().toString());
    setMonth((parsedBirthday.getUTCMonth() + 1).toString());
    setYear(parsedBirthday.getUTCFullYear().toString());
  }, []);
  useEffect(() => {
    setFullName(userInfo.fullName);
  }, [userInfo.fullName]);

  useEffect(() => {
    setGender(userInfo.gender);
  }, [userInfo.gender]);

  const handleDayChange = (e) => {
    e.preventDefault();
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    e.preventDefault();
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    e.preventDefault();
    setYear(e.target.value);
  };

  const handleSave = () => {
    const birthday = `${String(year)}-${String(month).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    const dataUpdateProfile = {
      fullName: fullName,
      gender: gender,
      birthday: birthday,
    };
    handleUpdateUserProfile(dataUpdateProfile, userId);
    // Thực hiện các xử lý khác, ví dụ: gửi dữ liệu lên server
  };

  const handleUpdateUserProfile = async (data, userId) => {
    try {
      setIsLoading(true);
      const responseData = await updateUserProfile(data, userId);
      if (responseData) {
        toast.success("Update Successful.");
      } else {
        console.error("Get failed");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in failed get profile of user: ", err);
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
  };

  const handleGetProfileOfUser = async (userId) => {
    try {
      setIsLoading(true);
      const responseData = await getProfileOfUser(userId);
      if (responseData) {
        setUserInfo(responseData.data);
        const birthdayDate = new Date(responseData.data.birthday);

        // Lấy giá trị năm, tháng, ngày từ đối tượng Date
        setYear(birthdayDate.getFullYear());
        setMonth(birthdayDate.getMonth() + 1); // Tháng trong JavaScript bắt đầu từ 0
        setDay(birthdayDate.getDate());
      } else {
        console.error("Get failed");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in failed get profile of user: ", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) handleGetProfileOfUser(userId);
  }, [userId]);

  console.log(userInfo);
  console.log(day, month, year);

  return (
    <div className="fontSizePageUser">
      <div className="container p-5 px-5">
        <div className="row">
          <div className="col-2">
            <div className="d-flex profile-avatar pb-3">
              <a>
                <img
                  src={imageUrl}
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
                    <span className="fw-bold text-body">Tài khoản của tôi</span>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div class="d-flex flex-column profile-address my-2">
                <a>Hồ Sơ</a>
                <Link
                  to="/user/address"
                  className="mt-2 text-decoration-none text-body"
                >
                  Địa Chỉ
                </Link>
              </div>
            </div>
          </div>

          <div className="col-10 bg-white highlight-container">
            <div class="mx-3 myProfile pb-3">
              <div className="mt-3 fs-5 fw-bold">Hồ sơ của tôi</div>
              <div className="">
                Quản lý thông tin hồ sơ để bảo mật tài khoản
              </div>
            </div>
            <div className="row px-3">
              <div className="col-8 ">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3 row " style={{ width: "450px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-3 col-form-label"
                    >
                      Họ và tên
                    </label>
                    <div className="col-9">
                      <input
                        type="text"
                        name="title"
                        value={fullName}
                        onChange={handleFullNameChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "450px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-3 col-form-label"
                    >
                      Email
                    </label>
                    <div class="col-9 d-flex">
                      <div class="mt-2">{userInfo.email}</div>
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "450px" }}>
                    <label
                      htmlFor="inputPassword"
                      className="col-3 col-form-label"
                    >
                      Số điện thoại
                    </label>
                    <div class="col-9 d-flex">
                      <div class="mt-2">0967064267</div>
                    </div>
                  </div>
                  <div className="mb-3 row" style={{ width: "450px" }}>
                    <div className="d-flex mt-3">
                      <div className="col-3">
                        <label
                          htmlFor="inputPassword"
                          className=" col-form-label"
                        >
                          Giới tính
                        </label>
                      </div>
                      <div className="d-flex col-9">
                        <div className="form-check mt-1 mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="radioOption1"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGenderChange}
                          />
                          <label
                            className="form-check-label mt-1 mx-2"
                            htmlFor="radioOption1"
                          >
                            Nam
                          </label>
                        </div>
                        <div className="form-check mt-1 mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="radioOption2"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGenderChange}
                          />
                          <label
                            className="form-check-label mt-1 mx-2"
                            htmlFor="radioOption2"
                          >
                            Nữ
                          </label>
                        </div>
                        <div className="form-check mt-1 mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="radioOption3"
                            value="Khác"
                            checked={gender === "Khác"}
                            onChange={handleGenderChange}
                          />
                          <label
                            className="form-check-label mt-1 mx-2"
                            htmlFor="radioOption3"
                          >
                            Khác
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row" style={{ width: "450px" }}>
                      <label
                        htmlFor="inputPassword"
                        className="col-3 col-form-label"
                      >
                        Ngày sinh
                      </label>
                      <div className="col-9 d-flex">
                        <input
                          type="number"
                          class="form-control"
                          id="day"
                          name="day"
                          placeholder="1"
                          value={day}
                          min="1"
                          max="31"
                          onChange={handleDayChange}
                          required
                        />
                        <select
                          class="form-select"
                          id="month"
                          name="month"
                          value={month}
                          required
                          onChange={handleMonthChange}
                        >
                          <option value="" disabled selected>
                            Tháng
                          </option>
                          <option value="1">Tháng 1</option>
                          <option value="2">Tháng 2</option>
                          <option value="3">Tháng 3</option>
                          <option value="4">Tháng 4</option>
                          <option value="5">Tháng 5</option>
                          <option value="6">Tháng 6</option>
                          <option value="7">Tháng 7</option>
                          <option value="8">Tháng 8</option>
                          <option value="9">Tháng 9</option>
                          <option value="10">Tháng 10</option>
                          <option value="11">Tháng 11</option>
                          <option value="12">Tháng 12</option>
                        </select>
                        <input
                          type="number"
                          class="form-control"
                          id="year"
                          name="year"
                          placeholder="2001"
                          value={year}
                          min="1980"
                          max="2010"
                          required
                          onChange={handleYearChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    style={{ widht: "70px", height: "40px" }}
                    onClick={handleSave}
                  >
                    Lưu
                  </button>
                </form>
              </div>
              <div className="col-4 ">
                <div className="mt-5">
                  <div className="d-flex flex-column choose-image">
                    <img
                      src={imageUrl}
                      style={{ width: "100px", height: "100px" }}
                      className="rounded-circle volume-image"
                    />
                    <Form.Group controlId="formFile" className="mx-4 ">
                      <div className="d-flex">
                        <Button
                          className="bg-white text-body border border-secondary mx-1 mt-2"
                          onClick={handleButtonClick}
                        >
                          Chọn ảnh
                        </Button>
                        <Form.Control
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>
                    </Form.Group>
                    <div class="my-3 ">
                      <div class="">Dụng lượng file tối đa 1 MB</div>
                      <div class="">Định dạng:.JPEG, .PNG</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
