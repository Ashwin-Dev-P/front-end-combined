import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class FarmerItem extends Component {
  render() {
    const { username , _id } = this.props.farmer;
    return (
      <Link  to={`/consumer/farmer/${_id}`} className='border shadow-sm py-2 text-decoration-none text-center'>
        
        {username}
        
      </Link>
    )
  }
}
