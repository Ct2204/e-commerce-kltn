import React, { useState } from 'react';
import './VerificationCodeForm.css'; // Import file CSS của bạn

const VerificationCodeForm = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Chỉ cho phép nhập số và giới hạn độ dài là 1 chữ số
    if (/^\d{0,1}$/.test(value)) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
    }
  };

  return (
    <form>
      <label>
        Verification Code:
        <div className="verification-code-inputs">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
            />
          ))}
        </div>
      </label>
      <button type="submit">Submit</button>
    </form>


    
  );
};

export default VerificationCodeForm;
