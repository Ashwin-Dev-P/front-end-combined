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
    <section className="farmer-profile_body">
            <FarmersNav />
            <div className="farmer-profile_body--content">
                <h1>Personal Information</h1>
                <p className="name">Name: {user.username}</p>
                <p className="name">Email ID: {user.email}</p>
                <p className="name">Phone: {user.phone}</p>
                <p className="name">Address: {user.address}</p>
            </div>
    </section>
  );
}

export default FarmersProfile;
