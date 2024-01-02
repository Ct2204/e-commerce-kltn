import React, { useEffect, useState } from 'react'
import './DashbarAdmin.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Link } from 'react-router-dom'

const DashbarAdmin = (props) => {
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
            <Link className="nav-link text-white" to="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt mx-3"></i>
              <span>Trang chủ</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading text-white mx-3">Quản lí</div>

          <li className="nav-item text-white">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog mx-3"></i>
              <Link
                to="/dashboard/order"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span>Đơn hàng</span>
              </Link>
            </a>
          </li>

          <li className="nav-item text-white">
            <Link to="/dashboard/user" className="nav-link collapsed">
              <i className="fas fa-fw fa-wrench mx-3"></i>
              <span>Người dùng</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading text-white mx-3">Thống kê</div>

          <li className="nav-item text-white">
            <a className="nav-link collapsed">
              <i className="fas fa-fw fa-folder mx-3"></i>
              <Link
                to="/dashboard/revenue"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span>Doanh thu</span>
              </Link>
            </a>
          </li>

          <li className="nav-item text-white">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area mx-3"></i>
              <span>Charts</span>
            </a>
          </li>

          <li className="nav-item text-white">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table mx-3"></i>
              <span>Tables</span>
            </a>
          </li>
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
      </div>
    </div>
  )
}

export default DashbarAdmin
