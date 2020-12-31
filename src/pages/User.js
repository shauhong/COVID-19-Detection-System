import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../components/Details.css";

function User(props) {
  useEffect(() => {
    console.log(props.token);

    fetch("http://localhost:5000/users/", {
      method: "GET",
      headers: new Headers({
        // prettier-ignore
        "Authorization": props.token,
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json) {
          console.log(json);
        } else {
          console.log("error");
        }
      });
  });

  //   function onSignIn(e) {
  //     // Grab state
  //     e.preventDefault();

  //     // const { email, password } = this.state;

  //     // Post request to backend
  //     fetch("http://localhost:5000/users/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password
  //       })
  //     })
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log("json", json);
  //         if (json.success) {
  //         } else {
  //         }
  //       });
  //   }

  return (
    <div className="page">
      <div className="header">
        <h4 className="title">
          <b>User</b>
        </h4>
        <div className="buttons">
          <button className="editButton">Edit</button>
          <button className="deleteButton">Delete</button>
        </div>
      </div>

      <div className="Flexbox">
        <div className="image">
          <img src="https://wx3.sinaimg.cn/mw690/ec074f36gy1gljviraraeg20ex0ba7wn.gif"></img>
        </div>

        <table className="table">
          <tr>
            <th color="black">NRIC No.</th>
            <th>970420-33-0320</th>
          </tr>
          <tr>
            <th classname="Butir">Age</th>
            <th>23</th>
          </tr>
          <tr>
            <th classname="Butir">Gender</th>
            <th>Female</th>
          </tr>
          <tr>
            <th classname="Butir">Adress</th>
            <th>Guizhou, Guiyang.</th>
          </tr>
          <tr>
            <th classname="Butir">Contact No.</th>
            <th>183201314</th>
          </tr>
          <tr>
            <th classname="Butir">Hospital</th>
            <th>Chimelong Hospital</th>
          </tr>
          <tr>
            <th classname="Butir">Result</th>
            <th>Negative</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { token: state.token, signIn: state.signIn };
};

export default connect(mapStateToProps)(User);
