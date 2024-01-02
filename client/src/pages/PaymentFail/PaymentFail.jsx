import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <div className="my-5" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="d-flex justify-content-center  mb-3">
        <div
          className="bg-danger d-flex justify-content-center align-items-center"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        >
          <FaXmark
            className="text-white bg-danger"
            style={{ width: '30px', height: '30px' }}
          />
        </div>
      </div>
      <div className="text-center text-danger fs-3  mb-3">
        Thanh toán thất bại
      </div>
      <div className="text-center py-2 ">
        <button
          className="border-0 px-3 py-1 fw-bold mx-2"
          style={{ backgroundColor: 'rgb(47, 48, 48)', borderRadius: '20px' }}
        >
          <Link to="/" className="text-decoration-none text-white">
            Quay về trang chủ
          </Link>
        </button>
        <button
          className="border-0 px-3 py-1 fw-bold"
          style={{ backgroundColor: 'rgb(47, 48, 48)', borderRadius: '20px' }}
        >
          <Link t0="/payment" className="text-decoration-none text-white">
            Quay về thanh toán
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PaymentFail
