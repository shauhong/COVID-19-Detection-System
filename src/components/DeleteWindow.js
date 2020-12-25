import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function DeleteWindow(){

    const axios = require('axios');

    const onSubmit = (event) =>{

        axios.delete('http://localhost:5000/patients/5fe43ad99dc46a2fe82b54c8')
        .then(response => {console.log(response.data)})
        .catch((err)=>console.log(err));   

        window.location = '/';
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