import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [login, setLogin] = useState(false);

  //Error to be solved, the auth token cannot be passed through the http headers inorder to verify

  useEffect(() => {
    handleLoginCheck();
    console.log("run");
  });

  function handleLoginCheck() {
    fetch("http://localhost:5000/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.email) {
          setLogin(true);
        }
      });
  }

  return (
    <nav>
      {login ? (
        <>
          <div className="logo">
            <Link to="/">COVID-19</Link>
          </div>
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/scan">
              <li>Scan</li>
            </Link>
            <Link to="/patients">
              <li>Patient</li>
            </Link>
            <Link to="/">
              <li>Dashboard</li>
            </Link>
            <Link to="/login">
              <li>Logout</li>
            </Link>
          </ul>
        </>
      ) : (
        <>
          <div className="logo">
            <Link to="/">COVID-19</Link>
          </div>
          <ul className="nav-links" style={{ justifyContent: "flex-end" }}>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </>
      )}
    </nav>
  );
}

const mapStateToProps = state => {
  return { token: state.token };
};

export default connect(mapStateToProps)(NavBar);
