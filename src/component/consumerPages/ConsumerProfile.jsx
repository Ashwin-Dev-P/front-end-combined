import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ConsumerNavbar from './ConsumerNavbar';

function ConsumerProfile() {
    const [user, setUser] = useState({});

useEffect(() => {
    const id= sessionStorage.getItem('userid');
    console.log(id)
    fetch(`http://localhost:8000/user/${id}`)
    
    .then(response => response.json())
      .then(data => setUser(data));
}, []);
    console.log(user.email);
    return (
        <section className="consumer-profile_body">
            <ConsumerNavbar />
        
    <div className="consumer-profile_body--content">
                <h1>My Details</h1>
                <h2>Personal Information</h2>
            </div>
            <div className="consumer-profile_body--smallcontent">
            <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p> 
        
            </div>
            <div className="consumer-profile_button">
                <button>SAVE</button>

            </div>
    </section>
    

    )
}

export default ConsumerProfile;