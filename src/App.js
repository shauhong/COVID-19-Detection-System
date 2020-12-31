import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Scan from "./scan";
import Patients from "./information";
import User from "./pages/User";
import Statistics from "./statistics/Statistics";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./components/Details";
import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route path="/scan">
          {props.signIn ? <Scan /> : <Redirect to="/" />}
        </Route>
        <Route path="/patients/:id">
          {props.signIn ? <Details /> : <Redirect to="/" />}
        </Route>
        <Route path="/patients">
          {props.signIn ? <Patients /> : <Redirect to="/" />}
        </Route>
        <Route path="/statistics">
          {props.signIn ? <Statistics /> : <Redirect to="/" />}
        </Route>
        <Route path="/users" component={User} />

        {/* <Route path="/scan" component={Scan} />
        <Route path="/patients/:id" component={Details} />
        <Route path="/patients" component={Patients} />
        <Route path="/statistics" component={Statistics} /> */}

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return { signIn: state.signIn };
};

export default connect(mapStateToProps)(App);
