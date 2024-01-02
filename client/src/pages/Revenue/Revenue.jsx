import React, { useEffect, useRef, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import BarChart from './SalesChart.jsx'
import SalesChart from './SalesChart.jsx'
import DashbarAdmin from '../DashbarAdmin/DashbarAdmin.js'

const Revenue = () => {
  const chartRef = useRef(null)
  // Giả sử bạn có một state chứa dữ liệu doanh thu
  const revenueData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
    datasets: [
      {
        labels: 'Doanh thu',
        // backgroundColor: 'rgba(75,192,192,0.2)',
        // borderColor: 'rgba(75,192,192,1)',
        // borderWidth: 1,
        // hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        // hoverBorderColor: 'rgba(75,192,192,1)',
        data: [1000, 1500, 1200, 2000, 1800], // Dữ liệu doanh thu theo tháng
      },
    ],
  }
  //   const [revenueData, setRevenueData] = useState({
  //     labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
  //     datasets: [
  //       {
  //         label: 'Doanh thu',
  //         // backgroundColor: 'rgba(75,192,192,0.2)',
  //         // borderColor: 'rgba(75,192,192,1)',
  //         // borderWidth: 1,
  //         // hoverBackgroundColor: 'rgba(75,192,192,0.4)',
  //         // hoverBorderColor: 'rgba(75,192,192,1)',
  //         data: [1000, 1500, 1200, 2000, 1800], // Dữ liệu doanh thu theo tháng
  //       },
  //     ],
  //   })

  return (
    <div className="d-flex row my-override-class">
      <DashbarAdmin />

      <div className="navbar-child col-10 p-0">
        <h2>Biểu đồ Doanh thu</h2>
        <SalesChart />
      </div>
    </div>
  )
}

export default Revenue
