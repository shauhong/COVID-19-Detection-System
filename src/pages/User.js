import React, { useState, useEffect } from "react";
import "../components/Details.css";
import Modal from "react-modal";
import { connect, useSelector } from "react-redux";
import EditForm from "../components/EditUserForm";
// import DeleteWindow from "./DeleteWindow";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function User(props) {
  const wrapper = {
    paddingLeft: "15px",
    paddingRight: "15px"
  };

  const form = {
    display: "flex",
    marginTop: "30px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "15px",
    minWidth: "250px",
    width: "100%",
    marginLeft: "20px"
  };
  const row = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "10px",
    marginBottom: "10px"
  };
  const title = {
    fontSize: "26px",
    fontWeight: "700",
    margin: "15px",
    textAlign: "center"
  };

  const label = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#2B547E"
  };

  const button = {
    width: "100%",
    height: "32px",
    backgroundColor: "darkblue",
    color: "rgb(255,255,255)",
    cursor: "pointer",
    marginTop: "5px"
  };
  const formGroup = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "5px"
  };
  const formControl = {
    width: "100%",
    height: "20px"
  };

  const id = props.match.params.id;
  const token = useSelector(state => state.auth.token);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [user, setUser] = useState("");
  // const [name, setName] = useState("");
  // const [ic, setIC] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [postal, setPostal] = useState("");
  // const [negeri, setNegeri] = useState("");
  // const [city, setCity] = useState("");
  // const [result, setResult] = useState("");
  // const [image, setImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users/", {
      method: "GET",
      headers: new Headers({
        // prettier-ignore
        "Authorization": token,
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json) {
          setUser(json);
        } else {
          console.log("error");
        }
      });
  });

  return (
    <div className="page">
      <div className="header">
        <h4 className="title">
          <b>{user.name}</b>
        </h4>
        <div className="buttons">
          {/* <button onClick={() => setEditModalIsOpen(true)} className="editButton">Edit</button> */}
          <IconButton
            onClick={() => setEditModalIsOpen(true)}
            className="editButton"
          >
            <EditIcon className="editIcon" />
          </IconButton>
          <Modal
            classname="EditModal"
            isOpen={editModalIsOpen}
            onRequestClose={() => setEditModalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.75)"
              },
              content: {
                marginTop: "80px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }
            }}
          >
            <EditForm token={token} user={user} />
            <button
              className="closeButton"
              onClick={() => setEditModalIsOpen(false)}
            >
              Close
            </button>
          </Modal>
        </div>
      </div>

      <div className="Flexbox">
        <div className="flexItem">
          <div className="image">
            <img
              height="350px"
              width="350px"
              src="https://innmind.com/assets/placeholders/no_avatar-3d6725770296b6a1cce653a203d8f85dcc5298945b71fa7360e3d9aa4a3fc054.svg"
            ></img>
          </div>
        </div>

        <div className="flexItem">
          <div style={form}>
            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Name</label>
                <p style={formControl}>{user.name} </p>
              </div>
            </div>

            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Email</label>
                <p style={formControl}>{user.email} </p>
              </div>
            </div>
            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Password</label>
                <p style={formControl}>*********</p>
              </div>
            </div>

            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Phone</label>
                <p style={formControl}>{user.phone}</p>
              </div>
            </div>

            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Healthcare Facility Name </label>
                <p style={formControl}>{user.facilityName} </p>
              </div>
            </div>

            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Healthcare Facility Address</label>
                <p style={formControl}>{user.facilityAddress} </p>
              </div>
            </div>

            <div style={row}>
              <div style={formGroup}>
                <label style={label}>Postal Code</label>
                <p style={formControl}>{user.postal} </p>
              </div>
            </div>
            <div style={row}>
              <div style={formGroup}>
                <label style={label}>State</label>
                <p style={formControl}>{user.state} </p>
              </div>
            </div>

            <div style={row}>
              <div style={formGroup}>
                <label style={label}>City</label>
                <p style={formControl}>{user.city} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { token: state.token, signIn: state.signIn };
};

export default connect(mapStateToProps)(User);
