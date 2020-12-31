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
import Snackbar from "./components/Snackbar";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./components/Details";
import CreatePatient from './components/CreatePatient';
import { connect, useSelector } from "react-redux";
import AuthRoute from './utils/AuthRoute';
import Backdrop from './components/Backdrop';



function App() {
  const signIn = useSelector(state=>state.auth.signIn);
  return (
    <Router>
      <Backdrop />
      <NavBar />
      <Snackbar />
      <ScrollToTop />
      <Switch>
        {/* <Route path="/scan">
          {signIn ? <Scan /> : <Redirect to="/" />}
        </Route>
        <Route path="/patients/:id" render={({match})=>{
          if(signIn){
            return(<Details match={match}/>);
          }else{
            return(<Redirect to='/'/>)
          }
          }}
        />

        <Route path="/patients">
          {signIn ? <Patients /> : <Redirect to="/" />}
        </Route>
        <Route path="/statistics">
<<<<<<< HEAD
          {props.signIn ? <Statistics /> : <Redirect to="/" />}
        </Route>
        <Route path="/users" component={User} />

        {/* <Route path="/scan" component={Scan} />
        <Route path="/patients/:id" component={Details} />
        <Route path="/patients" component={Patients} />
        <Route path="/statistics" component={Statistics} /> */}

=======
          {signIn ? <Statistics /> : <Redirect to="/" />}
        </Route> */}
        <AuthRoute path="/scan" component={Scan}/>
        <AuthRoute path="/patients/:id" component={Details}/> 
        <AuthRoute path="/patients" component={Patients}/>
        <AuthRoute path="/statistics" component={Statistics}/>
>>>>>>> bb6c30521dfeb534443b4040c7b64a536d6fbfe0
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />s
        <Route path="/" exact component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

// const mapStateToProps = state => {
//   return { signIn: state.signIn };
// };

export default App;
// export default connect(mapStateToProps)(App);
