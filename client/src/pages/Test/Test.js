import React, { useState } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

function Test() {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', total: 100, status: 'Đang xử lý' },
    { id: 2, customer: 'Jane Smith', total: 150, status: 'Hoàn thành' },
    // ...Thêm các đơn hàng khác vào đây
  ])

  const [statusOptions, setStatusOptions] = useState([
    'Đang xử lý',
    'Hoàn thành',
    'Đã hủy',
  ])

  const [selectedStatus, setSelectedStatus] = useState('Tất cả')

  // Tính tổng doanh thu
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0)

  // Biểu đồ doanh thu
  //   const revenueChartData = {
  //     labels: orders.map((order) => order.customer),
  //     datasets: [
  //       {
  //         label: 'Doanh thu',
  //         data: orders.map((order) => order.total),
  //         backgroundColor: 'rgba(75,192,192,0.2)',
  //         borderColor: 'rgba(75,192,192,1)',
  //         borderWidth: 1,
  //         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
  //         hoverBorderColor: 'rgba(75,192,192,1)',
  //       },
  //     ],
  //   }

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    )
    setOrders(updatedOrders)
  }

  const handleFilterStatus = (status) => {
    setSelectedStatus(status)
  }

  const filteredOrders =
    selectedStatus === 'Tất cả'
      ? orders
      : orders.filter((order) => order.status === selectedStatus)

  return (
    <Container>
      <Row>
        <Col>
          <h1>Quản lý đơn hàng và doanh thu</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Danh sách đơn hàng</h2>
          <div className="mb-3">
            <Button
              variant="outline-primary"
              onClick={() => handleFilterStatus('Tất cả')}
            >
              Tất cả
            </Button>{' '}
            {statusOptions.map((status) => (
              <Button
                key={status}
                variant="outline-primary"
                onClick={() => handleFilterStatus(status)}
              >
                {status}
              </Button>
            ))}
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Khách hàng</th>
                <th>Tổng</th>
                <th>Trạng thái</th>
                <th>Thay đổi trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>{order.status}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2>Thống kê doanh thu</h2>
          <p>Tổng doanh thu: ${totalRevenue}</p>
          {/* <Bar data={revenueChartData} /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Test
