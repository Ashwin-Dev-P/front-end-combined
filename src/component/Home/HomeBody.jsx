import React from 'react'
import { Link } from 'react-router-dom';

const HomeBody = () => {
  return (
    <section className="home-body">
        <div id="about" className="home-body_about">
            <div className="home-body_about-info">
            <h1>This is Agromart</h1>
            <h3>A bridge between farmers and consumers</h3>
            <Link className="home-body_sign-btn" to={'/register'}>Sign Up!</Link>
            </div>
        </div>
    </section>
  )
}

export default HomeBody;
