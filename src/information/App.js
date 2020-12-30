import './App.css';
import React, {useState} from 'react';
import Cards from "../components/Cards";
// import Details from "../components/Details";
import Modal from 'react-modal';
// import NewForm from "../components/NewForm";
// import { BrowserRouter as Router, link } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
// import CreatePatient from '../components/CreatePatient';


Modal.setAppElement('#root');

function App() {

  const [modalIsOpen,setModalIsOpen] = useState(false);

  return (
    <div className="App">

      {/*<button  onClick={() => setModalIsOpen(true)} className="AddNewButton">Add New</button>
      <Modal classname="Modal"
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay:{
              backgroundColor:'rgba(0,0,0,0.75)',
            }, 
            content:{
              marginTop:'80px',
              marginLeft: 'auto',
              marginRight:'auto',
              width: '50%', 
              
            }
          }
        }
      >
        <CreatePatient openModal={setModalIsOpen}/>
        <button className="closeButton" onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>*/}
      
      
      <div className="Dashboard">
        <Cards />
      </div>


    </div>

      
  );
}

export default App;
