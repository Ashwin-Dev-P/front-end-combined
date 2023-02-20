import React from 'react';
import HomeBody from './Home/HomeBody';
import HomeFooter from './Home/HomeFooter';
import HomeNavbar from './Home/HomeNavbar';

const Homepage = () => {
  return (
    <section className="home">
        <HomeNavbar />
        <HomeBody />
        <HomeFooter />
    </section>
  )
}

export default Homepage;