import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar } from '../actions';
import axios from 'axios';

function DeletePatient(props){

    const subtext = {
        marginTop:"15px",
        marginBottom: "30px",
    }

    const closeButton = {
        backgroundColor: 'black',
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
        'authorization': token,
    }
    const axios = require('axios');
    const dispatch = useDispatch();


    const onSubmit = (event) =>{

        event.preventDefault();

        axios.delete(`http://localhost:5000/patients/${id}`,{headers:headers})
        .then(response => {
            dispatch(setSnackbar(true,'success',"Patient profile deleted successfully!"));
            window.setTimeout(function(){window.location.href = "http://localhost:3000/patients/"},800);
        })
        .catch((err)=>console.log(err));   


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

export default DeletePatient;