import React, { useRef, useState } from "react";
import {
  changePassword,
  postVerificationCode,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange1 = (event) => {
    setEmail(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setConfirmPassword(event.target.value);
  };
  const navigate = useNavigate();

  console.log(email, confirmPassword);

  const handleChangePassword = async (e) => {
    try {
      setIsLoading(true);
      const responseData = await changePassword(email, confirmPassword);
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
      console.error("Error in send verification code: ", err);
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
        paddingTop: "150px",
        paddingBottom: "150px",
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
          <h5 className="fw-bold m-3 py-1">Đổi mật khẩu</h5>
          <p className="mx-3">
            Bạn nên sử dụng mật khẩu mạnh mà chưa sử dụng ở đâu khác
          </p>
        </div>
        <div className="phl ptm uiInterstitialContent">
          <div className="identify_yourself_block">
            <table className="_9nq3">
              <tbody>
                <tr>
                  <td></td>
                  <td
                    style={{
                      width: "400px",
                      height: "53px",
                    }}
                  >
                    <form className="mx-4">
                      <div className="row m-3" style={{ width: "400px" }}>
                        <label
                          htmlFor="inputPassword"
                          className="col-4 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-8">
                          <input
                            type="text"
                            name="title"
                            // value={product.title}
                            onChange={handleInputChange1}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row m-3" style={{ width: "400px" }}>
                        <label
                          htmlFor="inputPassword"
                          className="col-4 col-form-label"
                        >
                          Mật khẩu mới
                        </label>
                        <div className="col-8">
                          <input
                            type="passWord"
                            name="title"
                            // value={product.title}
                            onChange={handleInputChange2}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
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
                onClick={(e) => handleChangePassword(e)}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
