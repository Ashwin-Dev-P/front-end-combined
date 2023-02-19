import React from 'react'
import { Link } from 'react-router-dom'

const ConsumerDashboard = () => {
  return (
    <section className="consumer-dashboard_body">
      <div className="consumer-dashboard_body--content">
        <h1>agromart</h1>
        <p className="consumer-dashboard_body--smallcontent">
          Shop Your Produce As Farm Fresh Online!
        </p>
        <Link to={'/consumer/shop'} className="shop-btn"> Shop Now!</Link>
      </div>
    </section>
  )
}

export default ConsumerDashboard
