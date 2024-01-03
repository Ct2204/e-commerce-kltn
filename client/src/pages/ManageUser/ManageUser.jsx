import './ManageOrder.css'

import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { toast } from 'react-toastify'

import DashbarAdmin from '../DashbarAdmin/DashbarAdmin.js'
import Loader from '../Loader/Loader.js'
import { getAllUser, updateStatusUser } from '../../services/UserManage.js'

const ManageUser = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [userManage, setUserManage] = useState([])

  const handleGetAllUser = async () => {
    const responseData = await getAllUser()
    setUserManage(responseData)
  }
  useEffect(() => {
    handleGetAllUser()
  }, [isLoading])

  const handleUpdateStatusUser = async (userId) => {
    setIsLoading(true)
    const responseData = await updateStatusUser(userId)
    if (responseData.code === 201) {
      toast.success('Thành Công')
      setIsLoading(false)
    }
  }

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10 // Số lượng mục trên mỗi trang

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected)
  }

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleOrders = userManage.slice(startIndex, endIndex)

  return (
    <div className="d-flex row my-override-class">
      <DashbarAdmin />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="navbar-child col-10 p-0">
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
              <div className="mx-3 fw-bold">Quản lí khách hàng</div>
            </div>

            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">Id</th>
                    <th>Tên khách hàng</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Trạng thái</th>

                    <th class="text-center">Thay đổi trạng thái</th>
                  </tr>
                </thead>
                {visibleOrders.map((order, index) => (
                  <tbody>
                    <tr>
                      <td class="text-center text-muted">{index + 1}</td>
                      <td>{order.fullName}</td>
                      <td class="text-center">{order.email}</td>
                      <td class="text-center">
                        <div class="">{order.userStatusEnum}</div>
                      </td>

                      <td class="text-center">
                        {(() => {
                          switch (order.userStatusEnum) {
                            case 'ACTIVATED':
                              return (
                                <button
                                  style={{
                                    width: '100px',
                                    height: '50px',
                                  }}
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleUpdateStatusUser(order.id)
                                  }
                                >
                                  Chặn
                                </button>
                              )
                            case 'BANNED':
                              return (
                                <button
                                  type="button"
                                  style={{
                                    width: '100px',
                                    height: '40px',
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleUpdateStatusUser(order.id)
                                  }
                                >
                                  Kích hoạt
                                </button>
                              )
                            case 'NOT_ACTIVATED':
                              return (
                                <button
                                  type="button"
                                  style={{
                                    width: '100px',
                                    height: '40px',
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    handleUpdateStatusUser(order.id)
                                  }
                                >
                                  Kích hoạt
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
                                    handleUpdateStatusUser(order.id)
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
                  pageCount={Math.ceil(userManage.length / itemsPerPage)}
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

export default ManageUser
