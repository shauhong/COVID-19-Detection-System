import './Patient.css';
import React, {useState} from 'react';
import PatientCards from "../components/PatientCards";
import Modal from 'react-modal';



Modal.setAppElement('#root');

function App() {

  const [modalIsOpen,setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <div className="Dashboard">
        <PatientCards />
      </div>
    </div>    
  );
}

export default App;
