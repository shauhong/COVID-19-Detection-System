import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function DeleteWindow(props){

    const subtext = {
        marginTop:"15px",
        marginBottom: "30px",
    }

    const closeButton = {
        backgroundColor: "darkBlue",
        color: "white",
        paddingLeft: "8px",
        paddingRight: "8px",
    }

    const title={
        fontSize: '26px',
        fontWeight: '700',
    }

    const id = props.id;
    const token = useSelector(state=>state.auth.token);
    const headers = {
        'Content-Type': 'application/json',
        'authorization': token,
    }
    const axios = require('axios');

    const onSubmit = (event) =>{

        event.preventDefault();

        axios.delete(`http://localhost:5000/patients/${id}`,{headers:headers})
        .then(response => {console.log(response.data)})
        .catch((err)=>console.log(err));   

        window.location.href = "http://localhost:3000/patients/";

    }
           

    return(
        <div>
            <form onSubmit = {onSubmit} >
                <div style={title}>
                    Delete Patient
                </div>
                <div style={subtext}>
                    <p>Confirm deletion?</p>
                </div>
                <input style={closeButton} type="submit" value="Delete" className="closeButton"/>
            </form>
        </div>    
    )
}

export default DeleteWindow;