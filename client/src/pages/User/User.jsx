import React, { useEffect, useState } from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getProfileOfUser } from '../../services/UserService'
import Loader from '../Loader/Loader.js'

const User = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userProfile, setUserProfile] = useState([])
  const userId = useSelector((state) => state.auth.userInfo.user_id)

  const [imageUrl, setImageUrl] = useState(
    'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
  )

  const handleToGetUserProfile = async () => {
    const responseData = await getProfileOfUser(userId)
    setUserProfile(responseData.data)
  }
  useEffect(() => {
    handleToGetUserProfile()
  }, [isLoading])

  return (
    <div className="fontSizePageUser">
      <div className="container py-5">
        <div className="row">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="d-flex profile-avatar pb-3">
              <a>
                <img
                  src={userProfile.profilePicture || imageUrl}
                  style={{ width: '48px', height: '48px' }}
                  className="rounded-circle"
                />
              </a>
              <div className="mx-3">
                <div className="fw-bold text-body">{userProfile.fullName}</div>
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
          )}
          <div className="mt-4">
            <div className="stardust-dropdown__item-header">
              <a
                className="d-flex text-decoration-none"
                href="/user/account/profile"
              >
                <div className="account-image">
                  <img
                    src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
                    style={{ width: '20px', height: '20px' }}
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
  )
}

export default User
