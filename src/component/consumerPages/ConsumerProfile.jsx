import React, {useState, useEffect} from 'react';
import ConsumerNavbar from './ConsumerNavbar';

function ConsumerProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const id = sessionStorage.getItem("userid");
    console.log(id);
    const url = process.env.REACT_APP_BACKEND_URL + "/api/user/profile/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data.profile_details));
  }, []);
  console.log(user.email);
  return (
    <section>
            <ConsumerNavbar />
            <div className="consumer-profile_body">
            <div className="consumer-profile_body--content">
                <h1>Personal Information</h1>
                <p className="name">Name: {user.username}</p>
                <p className="name">Email ID: {user.email}</p>
                <p className="name">Phone: {user.phone}</p>
                <p className="name">Address: {user.address}</p>
            </div>
            </div>
    </section>
  );
}

export default ConsumerProfile;