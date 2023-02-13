import React from 'react';
import { Link } from 'react-router-dom';

const ConsumerNavbar = () => {
  return (
    <nav className="consumer-navbar">
        <div className="consumer-navbar--links">
          <Link to={'/consumer-Dash'} className="consumer-navbar--links_item">Home</Link>
          <Link to={'/consumer/shop'} className="consumer-navbar--links_item">Shop Products</Link>
          <Link to={'/consumer/cart'} className="consumer-navbar--links_item">Cart</Link>
          <Link to={'/consumer/profile'} className="consumer-navbar--links_item">Profile</Link>
        </div>
    </nav>
  )
}

export default ConsumerNavbar;
