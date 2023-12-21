import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { postCommentAndRating } from "../../services/UserService.js";
import { useSelector } from "react-redux";

const Comment = () => {
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");
  // const [reviews, setReviews] = useState([]);

  // const [formData, setFormData] = useState(new FormData());

  // useEffect(() => {
  //   console.log("formData", formData);
  // }, [formData]); // This will log whenever formData changes






  const [productId, setProductId] = useState(''); // State lưu productId
  const [starRating, setStarRating] = useState(5); // State lưu starRating
  const [comment, setComment] = useState(''); // State lưu comment
  const [file, setFile] = useState(null); // State lưu file

  // const [rating, setRating] = useState(5);

  const handleStarClick = (selectedRating) => {
    // Nếu rating đã được chọn, bỏ chọn nó; ngược lại, set rating mới
    setStarRating((prevRating) => (prevRating === selectedRating ? 0 : selectedRating));
  };

  const userId = useSelector((state) => state.auth.userInfo.user_id);

  const handleSubmit = async () => {
    // Kiểm tra xem có đủ thông tin để gửi không
    if (!productId || !starRating || !comment ) {
      console.error("Please fill in all fields.");
      return;
    }

    // Tạo FormData và thêm dữ liệu vào
    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('starRating', starRating);
    formData.append('comment', comment);
    if (file) {
      formData.append('listMedia', file);
    }

    // Gọi hàm postCommentAndRating
    const response = await postCommentAndRating(userId,formData);

    // Xử lý kết quả từ API (response)
    if (response.code === 200) {
      console.log("Comment and rating posted successfully:", response);
      // Thêm logic xử lý sau khi gửi thành công ở đây
    } else {
      console.log("Failed to post comment and rating.",response);
      // Thêm logic xử lý sau khi gửi thất bại ở đây
    }
  };

  return (
    <>
      <div>
      <label>
        Product ID:
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </label>
        <br />
        
        <p>Selected Rating: {starRating}</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer', color: star <= starRating ? 'gold' : 'gray' }}
        >
          &#9733; {/* Ký tự sao unicode */}
        </span>
      ))}
        
      {/* <label>
        Star Rating:
        <input type="text" value={starRating} onChange={(e) => setStarRating(e.target.value)} />
      </label> */}
      <br />
      <label>
        Comment:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <br />
       <label>
        File:
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </label> 
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  );
};

export default Comment;
