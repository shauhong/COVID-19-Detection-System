import React, {useState, useEffect} from 'react';
import './Details.css';
import Modal from 'react-modal';
import EditForm from "./EditForm";
import DeleteWindow from "./DeleteWindow";
import { ViewAgendaRounded } from '@material-ui/icons';
import axios from 'axios';


function Details(){

    const [modalIsOpen,setModalIsOpen] = useState(false);
    
    const [name, setName] = useState(null); 
    const [ic, setIC] = useState(null); 
    const [age, setAge] = useState(0); 
    const [gender, setGender] = useState(null); 
    const [phone, setPhone] = useState(null); 
    const [address, setAddress] = useState(null); 
    const [postal, setPostal] = useState(0); 
    const [negeri, setNegeri] = useState(null); 
    const [city, setCity] = useState(null); 
    const [result, setResult] = useState(null); 
    const [image, setImage] = useState(null); 

    const axios = require('axios');

    useEffect(() => {
        axios.get('http://localhost:5000/patients/5fe43ad99dc46a2fe82b54c8')
        .then((response) => {
            
            setName(response.data.name);
            setIC(response.data.ic);
            setAge(response.data.age);
            setGender(response.data.gender);
            setPhone(response.data.phone);
            setAddress(response.data.address);
            setPostal(response.data.postal);
            setNegeri(response.data.negeri);
            setCity(response.data.city);
            setResult(response.data.result);
            setImage(response.data.image);
            
        })
        .catch((err)=>console.log(err));
    })

    return(

        <div className="page">
            
 
            <div className="header">
                
                <h4 className="title">
                    <b>{name}</b>
                </h4>
                <div className="buttons">
                    <button onClick={() => setModalIsOpen(true)} className="editButton">Edit</button>
                    {/*<Modal classname="EditModal"
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
                        <EditForm name={name} ic={ic} age={age} gender={gender} phone={phone} address={address} postal={postal} negeri={negeri} city={city} result={result} image={image}/>
                        <button className="closeButton" onClick={() => setModalIsOpen(false)}>Close</button>
                    </Modal>
                    */}

                    <button onClick={() => setModalIsOpen(true)} className="deleteButton">Delete</button>
                    
                    <Modal classname="DeleteModal"
                        isOpen={modalIsOpen} 
                        onRequestClose={() => setModalIsOpen(false)}
                        style={
                        {
                            overlay:{
                                backgroundColor:'rgba(0,0,0,0.75)',
                            }, 
                            content:{
                                height:"160px",
                                marginTop:'250px',
                                marginLeft: 'auto',
                                marginRight:'auto',
                                width: '30%', 
                            
                            }
                        }
                        }
                    >
                        <DeleteWindow />
                        <div>
                            <button className="cancelButton" onClick={() => setModalIsOpen(false)}>Cancel</button>
                            <button className="closeButton" onClick={() => setModalIsOpen(false)}>Delete</button>
                        </div>
                    </Modal>
                </div>
                
            </div>
            
            <div className="Flexbox">
                <div className="flexItem"> 
                    <div className="image">
                        <img src="https://www.itnonline.com/sites/default/files/styles/content_large/public/Chest.jpeg?itok=yTw0jxOS"></img>
                    </div>
                </div>
                
                <table className="table">
                        <tr>
                            <th color="black">NRIC No.</th>
                            <th>{ic}</th>
                        </tr>
                        <tr>
                            <th classname="Butir">Age</th>
                            <th>{age}</th>
                        </tr>
                        <tr>
                            <th classname="Butir">Gender</th>
                            <th>{gender}</th>
                        </tr>
                        <tr>
                            <th color="black">Contact No.</th>
                            <th>{phone}</th>
                        </tr>
                        <tr>
                            <th classname="Butir">Address</th>
                            <th>{address}</th>
                        </tr>
                        <tr>
                            <th color="black">Postal Code</th>
                            <th>{postal}</th>
                        </tr>
                        <tr>
                            <th color="black">State</th>
                            <th>{negeri}</th>
                        </tr>
                        <tr>
                            <th classname="Butir">City</th>
                            <th>{city}</th>
                        </tr>
                        <tr>
                            <th classname="Butir">Result</th>
                            <th>{result}</th>
                        </tr>
                        <tr>
                            <th classname="Butir">Image</th>
                            <th>{image}</th>
                        </tr>
                        
                </table>
            </div>
        </div>
    )

}

export default Details;