import React from 'react'
import { Link } from 'react-router-dom';
import FarmersNav from './FarmersNav';

const FarmersDash = () => {
  return (
    <section className="farmers-Dash">
      <FarmersNav />
      <div className="farmers-Dash-btn">
        <h1>Agromart</h1>
        <h2>We connect the bridge between farmers and consumers</h2>
        <Link to={'/farmer/product-upload'} className='button'>Upload Now</Link>
      </div>
    </section>
  )
}

export default FarmersDash;
