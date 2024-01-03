import './ManageOrder.css'

import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import '@fortawesome/fontawesome-free/css/all.min.css'
import {
  changeStatusOrder,
  getAmuntUser,
  getOrderBySeller,
  getOrderManageByStatus,
} from '../../services/OrderManage.js'
import { toast } from 'react-toastify'

import DashbarAdmin from '../DashbarAdmin/DashbarAdmin.js'
import Loader from '../Loader/Loader.js'

const ManageOrder = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [orderManage, setOrderManage] = useState([])
  const [amountUser, setAmountUser] = useState(0)
  const [orderPaid, setOrderPaid] = useState([])

  const handleToGetOrderPaid = async () => {
    const responseData = await getOrderManageByStatus('PAID')
    setOrderPaid(responseData)
  }

  const handleToGetAmountUser = async () => {
    const responseData = await getAmuntUser()
    setAmountUser(responseData)
  }

  const totalAmount = orderManage.reduce(
    (acc, order) => acc + order.totalPrice,
    0
  )

  const totalAmountPaid = orderPaid.reduce(
    (acc, order) => acc + order.totalPrice,
    0
  )

  const handleToGetOrderManage = async () => {
    const responseData = await getOrderBySeller(1)
    console.log('res', responseData)
    setOrderManage(responseData)
  }

  const handleChangeStatusOrder = async (orderId, status) => {
    setIsLoading(true)
    const responseData = await changeStatusOrder(orderId, status)
    toast.success(responseData.message)
    setIsLoading(false)
  }
  useEffect(() => {
    handleToGetAmountUser()
  }, [])
  useEffect(() => {
    handleToGetOrderManage()
    handleToGetOrderPaid()
  }, [isLoading])

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10 // Số lượng mục trên mỗi trang

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected)
  }

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleOrders = orderManage.slice(startIndex, endIndex)

  return (
    <div className="d-flex row my-override-class">
      <DashbarAdmin />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="navbar-child col-10 p-0">
          <div className="row text-center mt-5 mx-4">
            <div
              className="col-3 bg-white py-5"
              style={{
                borderRight: '1px solid #eee',
                boxShadow:
                  '0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03)',
              }}
            >
              <div className=" d-flex justify-content-center mb-2">
                <div
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#3f6ad8',
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                  }}
                >
                  <i class="fa-solid fa-chart-bar"></i>
                </div>
              </div>
              <div className="">
                <div style={{ fontSize: '2.5rem' }} className="mb-2">
                  {amountUser}
                </div>
                <div className="text-secondary">Khách hàng </div>
              </div>
            </div>

            <div
              className="col-3 bg-white py-5"
              style={{
                borderRight: '1px solid #eee ',
                boxShadow:
                  '0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03)',
              }}
            >
              <div className=" d-flex justify-content-center mb-2">
                <div
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#3f6ad8',
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                  }}
                >
                  <i class="fa-solid fa-chart-bar"></i>
                </div>
              </div>
              <div className="">
                <div style={{ fontSize: '2.5rem' }} className="mb-2">
                  {orderManage.length}
                </div>
                <div className="text-secondary">Đơn hàng </div>
              </div>
            </div>
            <div
              className="col-3 bg-white py-5"
              style={{
                borderRight: '1px solid #eee ',
                boxShadow:
                  '0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03)',
              }}
            >
              <div className=" d-flex justify-content-center mb-2">
                <div
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#3f6ad8',
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                  }}
                >
                  <i class="fa-solid fa-chart-bar"></i>
                </div>
              </div>
              <div className="">
                <div style={{ fontSize: '2.5rem' }} className="mb-2">
                  {numberWithCommas(totalAmountPaid)}đ
                </div>
                <div className="text-secondary">Đã thanh toán </div>
              </div>
            </div>
            <div
              className="col-3 bg-white py-5"
              style={{
                borderRight: '1px solid #eee ',
                boxShadow:
                  '0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03)',
              }}
            >
              <div className=" d-flex justify-content-center mb-2">
                <div
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#3f6ad8',
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                  }}
                >
                  <i class="fa-solid fa-chart-bar"></i>
                </div>
              </div>
              <div className="">
                <div style={{ fontSize: '2.5rem' }} className="mb-2">
                  {numberWithCommas(totalAmount - totalAmountPaid)}đ
                </div>
                <div className="text-secondary">Chưa thanh toán </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white mt-5 mx-4"
            style={{
              boxShadow:
                '0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03)',
            }}
          >
            <div
              class="card-header px-3 py-2 d-flex align-items-center"
              style={{
                borderBottom: '1px solid #eee ',
              }}
            >
              <div className="mx-3 fw-bold">Quản lí đơn hàng</div>
            </div>

            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">Id</th>
                    <th>Tên khách hàng</th>
                    <th class="text-center">Tổng tiền</th>
                    <th class="text-center">Trạng thái</th>

                    <th class="text-center">Thay đổi trạng thái</th>
                  </tr>
                </thead>
                {visibleOrders.map((order, index) => (
                  <tbody>
                    <tr>
                      <td class="text-center text-muted">{index + 1}</td>
                      <td>{order.fullName}</td>
                      <td class="text-center">
                        {numberWithCommas(order.totalPrice)}đ
                      </td>
                      <td class="text-center">
                        <div class="">{order.status}</div>
                      </td>

                      <td class="text-center">
                        {(() => {
                          switch (order.status) {
                            case 'PAID':
                              return (
                                <button
                                  style={{
                                    width: '100px',
                                    height: '50px',
                                  }}
                                  type="button"
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleChangeStatusOrder(
                                      order.id,
                                      'DELIVERED'
                                    )
                                  }
                                >
                                  Giao hàng
                                </button>
                              )
                            case 'DELIVERED':
                              return (
                                <button
                                  type="button"
                                  style={{
                                    width: '100px',
                                    height: '40px',
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleChangeStatusOrder(order.id, 'SHIPPED')
                                  }
                                >
                                  Chuyển hàng
                                </button>
                              )
                            case 'PENDING':
                              return (
                                <button
                                  type="button"
                                  style={{
                                    width: '100px',
                                    height: '50px',
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleChangeStatusOrder(order.id, 'PAID')
                                  }
                                >
                                  Đã thanh toán
                                </button>
                              )
                            case 'SHIPPED':
                              return (
                                <button
                                  type="button"
                                  style={{
                                    width: '100px',
                                    height: '40px',
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleChangeStatusOrder(order.id, 'CLOSED')
                                  }
                                >
                                  Hoàn thành
                                </button>
                              )

                            default:
                              return (
                                <button
                                  type="button"
                                  style={{
                                    width: '100px',
                                    height: '40px',
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleChangeStatusOrder(order.id)
                                  }
                                >
                                  Xử lý
                                </button>
                              )
                          }
                        })()}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  pageCount={Math.ceil(orderManage.length / itemsPerPage)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageOrder
