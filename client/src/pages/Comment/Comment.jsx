import React, { useState } from 'react'

import { postCommentAndRating } from '../../services/UserService.js'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Comment = ({ productId }) => {
  const [starRating, setStarRating] = useState(5) // State lưu starRating
  const [comment, setComment] = useState('') // State lưu comment
  const [file, setFile] = useState(null) // State lưu file

  const handleStarClick = (selectedRating) => {
    // Nếu rating đã được chọn, bỏ chọn nó; ngược lại, set rating mới
    setStarRating((prevRating) =>
      prevRating === selectedRating ? 0 : selectedRating
    )
  }

  const userId = useSelector((state) => state.auth.userInfo.user_id)

  const handleSubmit = async () => {
    // Kiểm tra xem có đủ thông tin để gửi không
    if (!productId || !starRating || !comment) {
      toast.error('Please fill in all fields.')
    }

    // Tạo FormData và thêm dữ liệu vào
    const formData = new FormData()
    formData.append('productId', productId)
    formData.append('starRating', starRating)
    formData.append('comment', comment)
    if (file) {
      formData.append('listMedia', file)
    }

    // Gọi hàm postCommentAndRating
    const response = await postCommentAndRating(userId, formData)

    // Xử lý kết quả từ API (response)
    if (response.code === 201) {
      toast.success(response.message)
      setComment('')

      // Thêm logic xử lý sau khi gửi thành công ở đây
    } else {
      toast.error(response.message)
      // Thêm logic xử lý sau khi gửi thất bại ở đây
    }
  }

  return (
    <div
      className="d-flex "
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="mx-2"
        style={{
          fontSize: '40px',
        }}
      >
        Bình luận của bạn:
      </div>
      <div style={{ fontSize: '25px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            className=""
            key={star}
            onClick={() => handleStarClick(star)}
            style={{
              cursor: 'pointer',
              color: star <= starRating ? 'gold' : 'gray',
            }}
          >
            &#9733; {/* Ký tự sao unicode */}
          </span>
        ))}

        <div className="mt-2 ">
          <textarea
            style={{
              width: '300px',
              height: '200px',
            }}
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* <div className="mt-2">
          <label
            className="bg-dark text-white fw-bold py-1 px-2"
            style={{ borderRadius: '20px' }}
          >
            Choose File
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </label>
        </div>
        <br /> */}
        <button
          style={{
            borderRadius: '20px',
            marginLeft: '150px',
            marginTop: '20px',
          }}
          className="btn btn-outline-primary "
          onClick={handleSubmit}
        >
          Comment
        </button>
      </div>
    </div>
  )
}

export default Comment
