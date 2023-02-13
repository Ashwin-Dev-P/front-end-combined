import React from 'react';
import { Link } from 'react-router-dom';
import FarmersDash from './farmer/FarmersDash';
import FarmersNav from './farmer/FarmersNav';

const FarmersLanding = () => {
  return (
    <div className='farmer'>
      {/* <FarmersNav /> */}
      <FarmersDash />
    </div>
  )
}

export default FarmersLanding;
