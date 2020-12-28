import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { connect, useDispatch } from "react-redux";
import { signIn, setSnackbar } from '../actions';
import * as actionTypes from "../store/actions";

function Login(props) {
  const dispatch = useDispatch();

  const container = {
    display: "flex",
    height: "90vh",
    width: "100%",
    alignItems: "center"
  };
  const wrapper = {
    display: "flex",
    margin: "0 auto",
    padding: "30px 40px",
    minWidth: "350px",
    width: "25%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid rgba(0,0,0,15%)",
    boxShadow: "5px 5px 5px rgba(0,0,0,16%), -5px 5px 5px rgba(0,0,0,16%)",
    gap: "20px",
    borderRadius: "2%"
  };
  const button = {
    height: "32px",
    width: "100%"
  };
  const subtext = {
    fontSize: "12px",
    fontWeight: "700",
    textAlign: "right",
    width: "100%",
    marginTop: "-10px",
    padding: "0"
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handlePage() {
    history.push("/scan");
  }

  function onSignIn(e) {
    // Grab state
    e.preventDefault();

    // const { email, password } = this.state;

    // Post request to backend
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          // setErrorMessage(json.message);
          dispatch(signIn(json.token));
          dispatch(setSnackbar(true,'success',json.message));
          localStorage.signIn = true;
          localStorage.token = json.token;
          // localStorage.auth = {signIn:true, token:json.token};
          // props.setToken(json.token);
          handlePage();
        } else {
          dispatch(setSnackbar(true,'error',json.message));
          // setErrorMessage(json.message);
        }
      });
  }

  return (
    <div style={container}>
      <div style={wrapper}>
        <p className="md-text bold">Login with COVID-19</p>
        <form className="form" onSubmit={onSignIn}>
          <div className="form-group">
            <label className="sm-text bold">Email Address</label>
            <input
              className="form-control"
              onChange={handleEmail}
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label className="sm-text bold">Password</label>
            <input
              className="form-control"
              onChange={handlePassword}
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="button bold"
            style={button}
          />
          {/* {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
          )} */}
          <Link to="/signup" style={subtext}>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setToken: token =>
//       dispatch({ type: actionTypes.SIGNEDIN, userToken: token })
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(Login);

export default Login;
