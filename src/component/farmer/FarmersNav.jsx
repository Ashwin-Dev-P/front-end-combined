import React from 'react'
import { Link } from 'react-router-dom';

const FarmersNav = () => {
  return (
    <nav className="farmers-Nav">
        <Link to={'/farmer-Dash'} className="farmers-Nav--items">Home</Link>
        <Link to={'/farmer/home'} className="farmers-Nav--items">Home</Link>
        <Link to={'/farmer/upload-produce'} className="farmers-Nav--items">Upload Produce</Link>
        <Link to={'/farmer/profile'} className="farmers-Nav--items">Profile</Link>
    </nav>
  )
}

export default FarmersNav;
