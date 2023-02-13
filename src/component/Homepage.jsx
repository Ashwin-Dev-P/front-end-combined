import React from 'react';
import HomeBody from './Home/HomeBody';
import HomeNavbar from './Home/HomeNavbar';

const Homepage = () => {
  return (
    <section className="home">
        <HomeNavbar />
        <HomeBody />
    </section>
  )
}

export default Homepage;