import React, {useState, useEffect} from 'react';
import './Details.css';
import Modal from 'react-modal';
import EditForm from "./EditForm";
import DeleteWindow from "./DeleteWindow";
import { ViewAgendaRounded } from '@material-ui/icons';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




function Details(props){

    const wrapper={
        paddingLeft:'15px',
        paddingRight:'15px',
    }

    const form={
        display: 'flex',
        marginTop:'30px',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '15px',
        minWidth: '250px',
        width: '100%',
        marginLeft:'20px',
    }
    const row={
        display: 'flex',
        justifyContent:'space-between',
        width: '100%',
        gap: '10px',
        marginBottom:'10px',
    }
    const title={
        fontSize: '26px',
        fontWeight: '700',
        margin:'15px',
        textAlign:'center',
    };

    const label={
        fontSize: '18px',
        fontWeight: '700',
        color: '#2B547E',
    };

    const button={
        width: '100%',
        height: '32px',
        backgroundColor: 'darkblue',
        color: 'rgb(255,255,255)',
        cursor: 'pointer',
        marginTop: '5px',
    };
    const formGroup={
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '5px',
    };
    const formControl={
        width: '100%',
        height: '20px',
    };

    const id = props.match.params.id;
    console.log(props);
    const [editModalIsOpen,setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen,setDeleteModalIsOpen] = useState(false);
    
    const [name, setName] = useState(""); 
    const [ic, setIC] = useState(""); 
    const [age, setAge] = useState(""); 
    const [gender, setGender] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [address, setAddress] = useState(""); 
    const [postal, setPostal] = useState(""); 
    const [negeri, setNegeri] = useState(""); 
    const [city, setCity] = useState(""); 
    const [result, setResult] = useState(""); 
    const [image, setImage] = useState(""); 

    const axios = require('axios');
    const token = useSelector(state=>state.auth.token);
    const headers = {
        'Content-Type': 'application/json',
        'authorization': token,
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/patients/${id}`, {headers:headers})
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
                    {/* <button onClick={() => setEditModalIsOpen(true)} className="editButton">Edit</button> */}
                    <IconButton onClick={() => setEditModalIsOpen(true)} className="editButton">
                        <EditIcon className="editIcon"/>
                    </IconButton>
                    <Modal classname="EditModal"
                        isOpen={editModalIsOpen} 
                        onRequestClose={() => setEditModalIsOpen(false)}
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
                        <EditForm id={id} name={name} ic={ic} age={age} gender={gender} phone={phone} address={address} postal={postal} negeri={negeri} city={city} result={result} image={image}/>
                        {/* <button className="closeButton" onClick={() => setEditModalIsOpen(false)}>Close</button> */}
                        <button className="closeButton" onClick={() => setEditModalIsOpen(false)}>Close</button>
                    </Modal>
                    

                    {/* <button onClick={() => setDeleteModalIsOpen(true)} className="deleteButton">Delete</button> */}
                    <IconButton color={'action'} onClick={() => setDeleteModalIsOpen(true)} className="deleteButton">
                        <DeleteForeverIcon className="deleteIcon"/>
                    </IconButton>
                    
                    <Modal classname="DeleteModal"
                        isOpen={deleteModalIsOpen} 
                        onRequestClose={() => setDeleteModalIsOpen(false)}
                        style={
                        {
                            overlay:{
                                backgroundColor:'rgba(0,0,0,0.75)',
                            }, 
                            content:{
                                height:"180px",
                                marginTop:'250px',
                                marginLeft: 'auto',
                                marginRight:'auto',
                                width: '30%', 
                            
                            }
                        }
                        }
                    >
                        <DeleteWindow id={id} />
                        <div>
                            <button className="closeButton" onClick={() => setDeleteModalIsOpen(false)}>Cancel</button>
                        </div>
                    </Modal>
                </div>
                
            </div>
            
            <div className="Flexbox">
                <div className="flexItem"> 
                    <div className="image">
                        <img height="450px" width="450px" src={`http://localhost:5000/assets/images/${image.substring(13)}`}></img>
                    </div>
                </div>

                <div className="flexItem">
                    <div style={form} >
                        
                        <div style={row}>
                            <div style={formGroup}> 
                                <label style={label}>NRIC No.</label>
                                <p style={formControl}>{ic} </p>
                            </div>
                        </div>
                        <div style={row}>
                            <div style={formGroup}> 
                                    <label style={label}>Age</label>
                                    <p style={formControl}>{age} </p>
                            </div>
                        </div>
                        <div style={row}>
                            <div style={formGroup}> 
                                <label style={label}>Gender</label>
                                <p style={formControl}>{gender} </p>
                            </div>  
                        </div>
                        <div style={row}>
                            <div style={formGroup}> 
                                <label style={label}>Contact No.</label>
                                <p style={formControl}>{phone} </p>
                            </div>
                        </div>

                        <div style={row}>
                            <div style={formGroup}> 
                                    <label style={label}>Address</label>
                                    <p style={formControl}>{address + ", " + postal + " " + city + ", " + negeri + "." } </p>
                            </div>
                        </div>
                        
                        <div style={row}>
                            <div style={formGroup}> 
                                    <label style={label}>Result</label>
                                    <p style={formControl}>{result} </p>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Details;