import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Error from "./pages/Error";
import { useEffect } from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Scan from "./scan";
import Patients from "./information";
import User from "./pages/User";
import Statistics from "./statistics/Statistics";
import NavBar from "./components/NavBar";
import Snackbar from "./components/Snackbar";
import ScrollToTop from "./components/ScrollToTop";
import PatientProfile from "./components/PatientProfile";
import CreatePatient from "./components/CreatePatient";
import { connect, useSelector } from "react-redux";
import AuthRoute from "./utils/AuthRoute";
import Backdrop from "./components/Backdrop";

function App() {
  useEffect(()=>{document.title="COVID-19 Detection System"},[]);
  const signIn = useSelector(state => state.auth.signIn);
  return (
    <Router>
      <Backdrop />
      <NavBar />
      <Snackbar />
      <ScrollToTop />
      <Switch>
        <AuthRoute path="/users" component={User} />
        <AuthRoute path="/scan" component={Scan} />
        <AuthRoute path="/patients/:id" component={PatientProfile} />
        <AuthRoute path="/patients" component={Patients} />
        <AuthRoute path="/statistics" component={Statistics} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />s
        <Route path="/" exact component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
