import React from 'react'
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <nav className='home-nav'>
        <div className="home-nav_logo">
        <img src="/images/homeImages/agromart.webp" alt="Agromart-The bridge between farmers and consumers" className='agro-img'/>
        <h1>AgroMart</h1>
        </div>
        <Link to={'/login'}className="home-nav_links--item">Login</Link>
        {/* <div className="home-nav_links">
            <a href="#about" className="home-nav_link">
                <li className="home-nav_links--item">Login</li>
            </a>
        </div> */}
    </nav>
  )
}

export default HomeNavbar;