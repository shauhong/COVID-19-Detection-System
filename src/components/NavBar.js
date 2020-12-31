import React from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
=======
import { useSelector, useDispatch } from "react-redux";
import { signOut, setSnackbar } from '../actions';
>>>>>>> bb6c30521dfeb534443b4040c7b64a536d6fbfe0
import { Link } from "react-router-dom";

<<<<<<< HEAD
function NavBar(props) {
=======
function NavBar() {
  const dispatch = useDispatch();
  const signIn = useSelector(state=>state.auth.signIn);

>>>>>>> bb6c30521dfeb534443b4040c7b64a536d6fbfe0
  function handleLogout() {
    localStorage.clear();
    dispatch(signOut());
    dispatch(setSnackbar(true,'success','Successfully Logged Out'));   
  }

  return (
    <nav>
      {signIn ? (
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
            <Link to="/statistics">
              <li>Dashboard</li>
            </Link>
<<<<<<< HEAD
            <Link to="/users">
              <li>Profile</li>
            </Link>
            <Link to="/login">
=======
            <Link to="/">
>>>>>>> bb6c30521dfeb534443b4040c7b64a536d6fbfe0
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

// const mapStateToProps = state => {
//   return { token: state.token, signIn: state.signIn };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     emptyToken: () => dispatch({ type: actionTypes.SIGNEDOUT })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NavBar);

export default NavBar;