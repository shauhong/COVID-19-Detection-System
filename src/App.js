import './App.css';
<<<<<<< HEAD
import React, {useState} from 'react';
import Cards from "./components/Cards";
import Details from "./components/Details";
import Modal from 'react-modal';
import Form from "./components/Form";
import { BrowserRouter as Router, link } from 'react-router-dom';
import Route from 'react-router-dom/Route';



Modal.setAppElement('#root');
=======
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

>>>>>>> master

function App() {

  const [modalIsOpen,setModalIsOpen] = useState(false);
  
  return (
<<<<<<< HEAD
    <div className="App">

      <button onClick={() => setModalIsOpen(true)} className="AddNewButton">Add New</button>
      <Modal classname="Modal"
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay:{
              backgroundColor:'rgba(0,0,0,0.75)',
            }, 
            content:{
              padding: '30px',
              color: 'yellow',
              width: '50%', 
              margin: 'auto',     
            }
          }
        }

        
        >
        <Form />
        <button className="closeButton" onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
      
      
      <div className="Dashboard">
        <Cards />
      </div>

      <Details />

    </div>

      
=======
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
>>>>>>> master
  );
}

export default App;
