import React from 'react';
import ConsumerDashboard from './consumerPages/ConsumerDashboard';
// import { Link } from 'react-router-dom';
import ConsumerNavbar from './consumerPages/ConsumerNavbar';

const ConsumerLanding = () => {
  return (
    <div className='consumer_landing'>
        <ConsumerNavbar />
        <ConsumerDashboard />
    </div>
  )
}

export default ConsumerLanding;