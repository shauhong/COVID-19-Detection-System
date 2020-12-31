import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { signIn, setSnackbar } from '../actions';

function SignUp() {
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
    padding: "20px 40px",
    minWidth: "350px",
    width: "40%",
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
  const states = [
    "",
    "Wilayah Persekutuan",
    "Selangor",
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Penang",
    "Perak",
    "Perlis",
    "Sabah",
    "Sarawak",
    "Terengganu"
  ];

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [facilityAddress, setFacilityAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleFacilityName(e) {
    setFacilityName(e.target.value);
  }

  function handleFacilityAddress(e) {
    setFacilityAddress(e.target.value);
  }

  function handlePostal(e) {
    setPostal(e.target.value);
  }

  function handleState(e) {
    setState(e.target.value);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handlePage() {
    history.push("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // const { email, password } = this.state;

    // Post request to backend
    fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        phone: phone,
        facilityName: facilityName,
        facilityAddress: facilityAddress,
        postal: postal,
        state: state,
        city: city
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          dispatch(signIn(json.token));
          dispatch(setSnackbar(true,'success',json.message));
          localStorage.signIn = true;
          localStorage.token = json.token;
          handlePage();
        } else {
          dispatch(setSnackbar(true,'error',json.message));
        }
      });
  }

  return (
    <div style={container}>
      <div style={wrapper}>
        <p className="md-text bold">Join Us Today</p>
        <form action="" method="post" className="form">
          <div className="form-row">
            <div className="form-group">
              <label className="sm-text bold">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleEmail}
              />
            </div>
            <div className="form-group">
              <label className="sm-text bold">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handlePassword}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="sm-text bold">Healthcare Facility Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Healthcare Facility Name"
              name="facility name"
              onChange={handleFacilityName}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="sm-text bold">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleName}
              />
            </div>
            <div className="form-group">
              <label className="sm-text bold">Mobile Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder="Mobile Phone"
                name="phone"
                onChange={handlePhone}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="sm-text bold">Healthcare Facility Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Healthcare Facility Address"
              name="address"
              onChange={handleFacilityAddress}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="sm-text bold">Postal Code</label>
              <input
                className="form-control"
                type="text"
                placeholder="Postal Code"
                name="postal code"
                onChange={handlePostal}
              />
            </div>
            <div className="form-group">
              <label className="sm-text bold">State</label>
              <select className="form-control" onChange={handleState}>
                {states.map((state, index) => {
                  return state === "" ? (
                    <option key={index} value={state} disabled selected>
                      State
                    </option>
                  ) : (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label className="sm-text bold">City</label>
              <input
                className="form-control"
                type="text"
                placeholder="City"
                name="city"
                onChange={handleCity}
              />
            </div>
          </div>
          <input
            type="submit"
            value="Sign Up"
            style={button}
            // className="button bold"
            className="button bold"
            onClick={handleSubmit}
          />
          <Link style={subtext} to="/login">
            Back To Login Page
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;