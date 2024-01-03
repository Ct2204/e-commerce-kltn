import SalesChart from './SalesChart.jsx'
import DashbarAdmin from '../DashbarAdmin/DashbarAdmin.js'

const Revenue = () => {
  return (
    <div className="d-flex row my-override-class">
      <DashbarAdmin />

      <div className="navbar-child col-10 p-0">
        <SalesChart />
      </div>
    </div>
  )
}

export default Revenue
