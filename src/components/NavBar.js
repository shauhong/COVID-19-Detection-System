import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionTypes from "../store/actions";

function NavBar(props) {
  const [login, setLogin] = useState(false);

  // useEffect(() => {
  //console.log(props.token);
  //handleLoginCheck();
  //});

  //   function handleLoginCheck() {
  //     fetch("http://localhost:5000/users/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: props.token
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log(json);
  //         if (json.email) {
  //           setLogin(true);
  //         }
  //       });
  //   }

  function handleLogout() {
    props.emptyToken();
  }

  return (
    <nav>
      {props.signIn ? (
        <>
          <div className="logo">
            <Link to="/">COVID-19</Link>
          </div>
          <ul className="nav-links">
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
              <li onClick={handleLogout}>Logout</li>
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
  return { token: state.token, signIn: state.signIn };
};

const mapDispatchToProps = dispatch => {
  return {
    emptyToken: () => dispatch({ type: actionTypes.SIGNEDOUT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
