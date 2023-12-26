import React, { useState } from 'react'
import { FcStatistics } from 'react-icons/fc'
import '@fortawesome/fontawesome-free/css/all.min.css'

const ManageOrder = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="d-flex row my-override-class">
      <div className="navbar-parent col-2 p-0" style={{ height: '100vh' }}>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand text-decoration-none d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-icon text-white rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <a className="nav-link text-white" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt mx-3"></i>
              <span>Trang chủ</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading text-white mx-3">Quản lí</div>

          <li className="nav-item text-white">
            <a>
              <i className="fas fa-fw fa-cog mx-3"></i>
              <span>User</span>
            </a>
          </li>

          <li className="nav-item text-white">
            <a>
              <i className="fas fa-fw fa-wrench mx-3"></i>
              <span>Order</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading text-white mx-3">
            Quantity statistics
          </div>

          <li className="nav-item text-white">
            <a>
              <i className="fas fa-fw fa-folder mx-3"></i>
              <span>Statistics</span>
            </a>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
      </div>
      <div className="col-10 bg-light">
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
                45.8K
              </div>
              <div className="text-secondary">Tổng tiền </div>
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
                45.8K
              </div>
              <div className="text-secondary">Tổng tiền </div>
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
                45.8K
              </div>
              <div className="text-secondary">Tổng tiền </div>
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
                45.8K
              </div>
              <div className="text-secondary">Tổng tiền </div>
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
            <div className="mx-3 fw-bold">Active Users</div>
            <div class="btn-actions-pane-right" style={{ marginLeft: 'auto' }}>
              <div class=" btn-group text-end  ">
                <button class=" btn btn-focus bg-dark text-white ">
                  Last Week
                </button>
                <button class="btn btn-focus bg-secondary text-white">
                  All year
                </button>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th>Name</th>
                  <th class="text-center">City</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Sales</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center text-muted">#345</td>
                  <td>Thien</td>
                  <td class="text-center">Madrid</td>
                  <td class="text-center">
                    <div class="">Pending</div>
                  </td>
                  <td class="text-center">
                    <div class="pie-sparkline"></div>
                  </td>
                  <td class="text-center">
                    <button type="button" class="btn btn-primary btn-sm">
                      Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center text-muted">#347</td>
                  <td>Thương</td>
                  <td class="text-center">Berlin</td>
                  <td class="text-center">
                    <div class="">Completed</div>
                  </td>
                  <td class="text-center"></td>
                  <td class="text-center">
                    <button
                      type="button"
                      id="PopoverCustomT-2"
                      class="btn btn-primary btn-sm"
                    >
                      Details SSS
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageOrder
