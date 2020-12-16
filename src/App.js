import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Scan from './scan';
import Information from './information';
import Statistics from './statistics';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <NavBar/>
      <ScrollToTop/>
      <Switch>
        <Route path="/scan" component={Scan}/>
        <Route path="/information" component={Information}/>
        <Route path="/statistics" component={Statistics}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/" exact component={Home}/>
        <Route path="*" exact component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
