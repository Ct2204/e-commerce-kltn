import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const PaymentSuccessful = () => {
  return (
    <div className="my-5" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="d-flex justify-content-center">
        <div
          className="bg-success d-flex justify-content-center align-items-center mb-3"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        >
          <IoCheckmarkSharp
            className="text-white"
            style={{ width: '30px', height: '30px' }}
          />
        </div>
      </div>
      <div className="text-center text-success fs-3  mb-3">
        Thanh toán thành công
      </div>
      <div className="text-center py-2">
        <button
          className="border-0 px-3 py-1 fw-bold"
          style={{ backgroundColor: 'rgb(47, 48, 48)', borderRadius: '20px' }}
        >
          <Link className="text-decoration-none text-white" to="/user/purchase">
            Quay về trang chủ
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PaymentSuccessful
