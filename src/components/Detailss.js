import React, {useState} from 'react';
import './Details.css';
import Modal from 'react-modal';
import EditForm from "./EditForm";
import { ViewAgendaRounded } from '@material-ui/icons';


function Details(){

    const name = "LIU YU XIN";
    const ic = "970420-33-0320";
    const age = 23;
    const gender = "Female";
    const address = "Guizhou, Guiyang";
    const phone = "1803201314";
    const result = "Negative";
    const [modalIsOpen,setModalIsOpen] = useState(false);

    return(

        <div className="page">
            
 
            <div className="header">
                
                <h4 className="title">
                    <b>{name}</b>
                </h4>
                <div className="buttons">
                    <button onClick={() => setModalIsOpen(true)} className="editButton">Edit</button>
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
                        <EditForm name={name} ic={ic} age={age} gender={gender} phone={phone} address={address} result={result}/>
                        <button className="closeButton" onClick={() => setModalIsOpen(false)}>Close</button>
                    </Modal>
                    
                    <button className="deleteButton">Delete</button>
                </div>
                
            </div>


            
            <div className="Flexbox">
                <div className="image">
                    <img className="img" src="https://wx3.sinaimg.cn/mw690/ec074f36gy1gljviraraeg20ex0ba7wn.gif"></img>
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
                        <th classname="Butir">Address</th>
                        <th>{address}</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Contact No.</th>
                        <th>{phone}</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Result</th>
                        <th>{result}</th>
                    </tr>
                    

                </table>
            
        </div>

        </div>


    )

}

export default Details;