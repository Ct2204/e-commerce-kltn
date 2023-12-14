import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getProfileOfUser,
  updateUserProfile,
  uploadPictureProfile,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import User from "../User/User.jsx";

const Profile = () => {
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


  const [userProfile,setUserProfile] = useState([])


  useEffect(() => {
    handleToGetUserProfile()
  },[])

  const handleToGetUserProfile = async () => {
    const responseData = await getProfileOfUser(userId);
    setUserProfile(responseData.data)
  }

  const handleToUploadPicture = async () => {
    const file = fileInputRef.current.click();
    console.log("hiii",file);
    // const responseData = await uploadPictureProfile(userId, file);
    // console.log("hello",responseData.message)
  }

  const handleButtonClick = () => {
    fileInputRef.current.click();
    
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile, "111")
    
     const responseData = await uploadPictureProfile(userId, selectedFile);
    console.log("hello",responseData.message)

    // Hủy URL cũ nếu có
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    // Kiểm tra nếu có tệp tin được chọn
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);


      // console.log("helllo",url)
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
      <div className="container py-5">
        <div className="row">
          
        <div className="col-2">
            <User/>
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
                        value={userProfile.fullName}
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
                      <div class="mt-2">{userProfile.email}</div>
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
              
              {/* Get and upload image */}
              <div className="col-4 ">
                <div className="mt-5">
                  <div className="d-flex flex-column choose-image">
                    <img
                      src={userProfile.profilePicture}
                      style={{ width: "100px", height: "100px" }}
                      className="rounded-circle volume-image"
                    />
                    <Form.Group controlId="formFile" className="mx-4 ">
                      <div className="d-flex">
                        <Button
                          className="bg-white text-body border border-secondary mx-1 mt-2"
                          onClick={()=>{handleButtonClick()}}
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

export default Profile;
