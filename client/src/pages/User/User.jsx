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
      <div className="container py-5">
        <div className="row">
          
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
            <Link
                  to="/user/profile"
                  className="mt-2 text-decoration-none text-body"
                >
                  Hồ sơ
                </Link>
               
                <Link
                  to="/user/address"
                  className="mt-2 text-decoration-none text-body"
                >
                  Địa Chỉ
                </Link>
                <Link
                  to="/user/purchase"
                  className="mt-2 text-decoration-none text-body"
                >
                  Đơn hàng
                </Link>
              </div>
            </div>
           

         
        </div>
      </div>
    </div>
  );
};

export default User;
