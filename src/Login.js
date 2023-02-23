import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {


    const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');

      const regobj = {
        email: username,
        password,
      };

      const url = process.env.REACT_APP_BACKEND_URL + "/api/user/login";
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);

          if (resp.status !== 200) {
            var err = new Error();
            err.message = resp.message;
            throw err;
          } else {
            toast.success("Succesfully Logged in.");

            const userid = resp.user._id;
            const jwt = resp.jwt;
            const username = resp.user.username;

            sessionStorage.setItem("userid", userid);
            sessionStorage.setItem("jwt", jwt);
            sessionStorage.setItem("username", username);

            if (resp.user.type === 0) {
              //farmer
              usenavigate("/farmer-Dash");
            } else {
              usenavigate("/consumer-Dash");
            }
          }

          /*
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            console.log(resp.userType);
            if (resp.password === password && resp.userType === "0") {
              toast.success("Succesfully Logged in.");
              usenavigate("/farmer-Dash");
              const userid = resp.id;
              sessionStorage.setItem("userid", userid);
            } else if (resp.password === password && resp.userType === "1") {
              toast.success("Succesfully Logged in.");
              const userid = resp.id;
              sessionStorage.setItem("userid", userid);
              usenavigate("/consumer-Dash");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
          */
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };




  return(
    <section className="login">
      <h1 className="greet">Welcome to AgroMart Login</h1>
      <form onSubmit={ProceedLogin} className="login-container">
          <h3 className="login-text">Login</h3>
          <div className="login-creds">
          <div className="mail">
              <label htmlFor="label" className="mail-label">
                  Email <span className="errmsg">*</span>
              </label>
              <input
              value={username}
              onChange={(e) => usernameupdate(e.target.value)}
              className="mail-input"
              type="email"
              />
          </div>
          <div className="pass">
              <label htmlFor="label" className="pass-label">
                  Password <span className="errmsg">*</span>
              </label>
              <input
              type="password"
              value={password}
              onChange={(e) => passwordupdate(e.target.value)}
              className="pass-input"
              />
          </div>
          </div>
          <div className="login-buttons">
          <button type="submit" className="btn btn-primary">
                  Login
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                  New User
              </Link>
          </div>
      </form>
    </section>
  ); 
};

export default Login;