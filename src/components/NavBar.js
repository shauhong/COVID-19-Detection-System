import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut, setSnackbar } from '../actions';
import { Link } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const signIn = useSelector(state=>state.auth.signIn);

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
            <Link to="/">
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