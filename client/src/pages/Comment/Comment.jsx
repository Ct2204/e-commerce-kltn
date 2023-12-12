import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Comment = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = () => {
    // Kiểm tra xem đã nhập đủ thông tin chưa
    if (rating === 0 || comment.trim() === "") {
      alert("Vui lòng nhập đủ thông tin đánh giá!");
      return;
    }

    // Tạo một review mới
    const newReview = {
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    // Cập nhật danh sách reviews
    setReviews([...reviews, newReview]);

    // Reset form đánh giá
    setRating(0);
    setComment("");
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Đánh giá sản phẩm</h2>

        {/* Form đánh giá */}
        <div className="row mt-3">
          <div className="col-md-6">
            <label>Đánh giá:</label>
            <div className="d-flex align-items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  className={`star ${value <= rating ? "selected" : ""}`}
                  onClick={() => handleRatingChange(value)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <label>Bình luận:</label>
            <textarea
              className="form-control"
              rows="3"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmitReview}>
          Gửi đánh giá
        </button>

        {/* Hiển thị reviews */}
        <div className="mt-5">
          <h4>Đánh giá khách hàng</h4>
          {reviews.map((review, index) => (
            <div key={index} className="border p-3 mt-3">
              <div className="d-flex justify-content-between">
                <div>Đánh giá: {review.rating} sao</div>
                <div>Ngày: {review.date}</div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
