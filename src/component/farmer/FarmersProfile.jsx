import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FarmersNav from "./FarmersNav";

function FarmersProfile() {
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
    <section className="consumer-profile_body">
      <FarmersNav />

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
  );
}

export default FarmersProfile;
