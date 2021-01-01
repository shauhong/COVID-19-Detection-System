import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { signIn, setSnackbar } from "../actions";

function EditUserForm(props) {
  const dispatch = useDispatch();

  const wrapper = {
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    alignItems: "center",
    height: "90%"
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
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);
  const [name, setName] = useState(props.user.name);
  const [phone, setPhone] = useState(props.user.phone);
  const [facilityName, setFacilityName] = useState(props.user.facilityName);
  const [facilityAddress, setFacilityAddress] = useState(
    props.user.facilityAddress
  );
  const [postal, setPostal] = useState(props.user.postal);
  const [state, setState] = useState(props.user.state);
  const [city, setCity] = useState(props.user.city);

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
    fetch("http://localhost:5000/users/edit", {
      method: "PUT",
      headers: {
        Authorization: props.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: props.user._id,
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
          dispatch(setSnackbar(true, "success", json.message));
        } else {
          dispatch(setSnackbar(true, "error", json.message));
        }
      });
  }

  return (
    <div style={wrapper}>
      <form action="" method="post" className="form">
        <div className="form-row">
          <div className="form-group">
            <label className="sm-text bold">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder={email}
              name="email"
              onChange={handleEmail}
            />
          </div>
          <div className="form-group">
            <label className="sm-text bold">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="********"
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
            placeholder={facilityName}
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
              placeholder={name}
              name="name"
              onChange={handleName}
            />
          </div>
          <div className="form-group">
            <label className="sm-text bold">Mobile Phone</label>
            <input
              className="form-control"
              type="text"
              placeholder={phone}
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
            placeholder={facilityAddress}
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
              placeholder={postal}
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
              placeholder={city}
              name="city"
              onChange={handleCity}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Edit"
          style={button}
          // className="button bold"
          className="button bold"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default EditUserForm;
