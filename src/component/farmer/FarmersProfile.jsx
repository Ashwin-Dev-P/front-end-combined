
import React, { useState, useEffect } from "react";
import MyButton from "../../MyComponents/MyButton";
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

  const updateLocation=(e)=>{
    e.preventDefault();
    const location = document.getElementById("location").value;
    const url = process.env.REACT_APP_BACKEND_URL + "/api/user/location";

    const regobj = {
      location,
      user_id: sessionStorage.getItem("userid"),
    };

      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          
          return res.json();
        })
        .then((res=>{
          console.log(res)
        }))
  }
  return (
    <section className="farmer-profile_body">
      <FarmersNav />
      <div className="farmer-profile_body--content">
        <h1>Personal Information</h1>
        <p className="name">Name: {user.username}</p>
        <p className="name">Email ID: {user.email}</p>
        <p className="name">Phone: {user.phone_number}</p>
        <p className="name">Address: {user.address}</p>
      </div>

      <div className="row mt-5">
        <div className="col-xs-12 col-md-3"></div>
        <div className="col-xs-12 col-md-6 text-center ">

        <form onSubmit={updateLocation} className="form">
        <div className="form-group">
          <input type="url" id="location" className="form-control" placeholder="https://goo.gl/maps/" />
          </div>
          <MyButton text="Update location" className="btn btn-primary mt-1"  />
        </form>
        </div>
        
      </div>
    </section>
  );
}

export default FarmersProfile;
