import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function DeleteWindow(props){

    const id = props.id;
    const token = useSelector(state=>state.token);
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
                <h3>
                    Delete Patient
                </h3>
                <div>
                    <p>Confirm deletion?</p>
                </div>
                <input type="submit" value="Delete1" className="closeButton"/>
            </form>
        </div>    
    )
}

export default DeleteWindow;