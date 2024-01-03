// SalesChart.js
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { getOrderManageByStatus } from '../../services/OrderManage.js'

const SalesChart = () => {
  const [orderPaid, setOrderPaid] = useState([])

  const [startDate, setStartDate] = useState(new Date('2023-01-01'))
  const [endDate, setEndDate] = useState(new Date('2023-6-01'))

  const [salesData, setSalesData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Doanh thu sản phẩm',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [],
      },
    ],
  })

  const handleToGetOrderPaid = async () => {
    const responseData = await getOrderManageByStatus('PAID')
    setOrderPaid(responseData)
  }
  useEffect(() => {
    handleToGetOrderPaid()
  }, [])

  useEffect(() => {
    // Tính toán dữ liệu mới dựa trên khoảng thời gian lựa chọn
    const filteredData = orderPaid.filter((order) => {
      const orderDate = new Date(order.updatedAt)
      return orderDate >= startDate && orderDate <= endDate
    })

    //Tính tổng doanh thu theo tháng
    const monthlyData = filteredData.reduce((acc, order) => {
      const month = new Date(order.updatedAt).getMonth()
      const year = new Date(order.updatedAt).getFullYear()
      const key = `${year}-${month + 1}`
      acc[key] = (acc[key] || 0) + order.totalPrice
      return acc
    }, {})

    //Sắp xếp theo thời gian
    const sortedMonthlyData = Object.keys(monthlyData).sort(
      (a, b) => new Date(a) - new Date(b)
    )

    setSalesData({
      labels: sortedMonthlyData.map((key) => {
        const date = new Date(key)
        return `${date.getMonth() + 1}/${date.getFullYear()}`
      }),
      datasets: [
        {
          label: 'Doanh thu sản phẩm',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: sortedMonthlyData.map((key) => monthlyData[key]),
        },
      ],
    })
  }, [startDate, endDate, orderPaid])

  return (
    <div style={{ margin: '20px', border: '1px solid #ccc' }}>
      <h2 style={{ margin: '20px' }}>Biểu đồ Doanh thu Sản phẩm</h2>
      <div style={{ margin: '20px' }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <Bar
        data={salesData}
        options={{
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  )
}

export default SalesChart
