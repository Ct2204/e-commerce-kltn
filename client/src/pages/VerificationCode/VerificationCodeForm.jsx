import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { enterVerificationCode } from "../../services/UserService";

const VerificationCode = () => {
  const [verification, setVerification] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    // Lấy giá trị từ thẻ input
    const inputValue = e.target.value;
    // Cập nhật state email
    setVerification(inputValue);
  };
  console.log(verification);
  const handleEnterVerificationCode = async (e) => {
    try {
      setIsLoading(true);
      const responseData = await enterVerificationCode(verification);
      if (responseData) {
        console.log(responseData);
        toast.success(responseData.message);
        navigate("/login");
      } else {
        console.log(responseData);
        toast.error("Failed.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in enter verification code: ", err);
      setIsLoading(false);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#e9ebee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        className="bg-white"
        style={{
          width: "500px",
          height: "300px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}>
          <h5 className="fw-bold m-3 py-1">Nhập mã xác nhận từ email</h5>
        </div>
        <div className="phl ptm uiInterstitialContent">
          <div className="identify_yourself_block">
            <table className="_9nq3">
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <div className="mx-3 mt-3">
                      Vui lòng nhập mã xác nhận để kích hoạt tài khoản
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td
                    style={{
                      width: "466px",
                      height: "53px",
                    }}
                  >
                    <input
                      style={{
                        padding: "16px 0 16px 16px",
                        width: "444px",
                        height: "51px",
                        borderRadius: "6px",
                        border: "1px solid #ccd0d5",
                      }}
                      type="password"
                      className="m-3"
                      id="identify_email"
                      name="verification"
                      placeHolder="Mã xác nhận"
                      autofocus="1"
                      aria-label="Mã xác nhận"
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-3 mb-3">
            <a href="#">Bạn chưa nhân được mã xác thực? </a>
          </div>
        </div>
        <div className="" style={{ borderTop: "1px solid rgba(0, 0, 0, .1)" }}>
          <div className="m-3">
            <div className="" style={{ float: "right" }}>
              <a
                role="button"
                className="py-2 text-decoration-none text-body mx-2"
                href="/login.php"
                style={{
                  padding: "0 20px",
                  backgroundColor: "#e4e6eb",
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                Hủy
              </a>
              <button
                value="1"
                className="text-white"
                style={{
                  padding: "0 20px",
                  backgroundColor: "#216fdb",
                  border: "none",
                  borderRadius: "6px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
                onClick={(e) => {
                  handleEnterVerificationCode(e);
                }}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
