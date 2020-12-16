import './App.css';
import React, {useState} from 'react';
import Cards from "../components/Cards";
import Details from "../components/Details";
import Modal from 'react-modal';
import Form from "../components/Form";
import { BrowserRouter as Router, link } from 'react-router-dom';
import Route from 'react-router-dom/Route';



Modal.setAppElement('#root');

function App() {

  const [modalIsOpen,setModalIsOpen] = useState(false);
  
  return (
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


    </div>

      
  );
}

export default App;
