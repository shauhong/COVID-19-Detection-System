import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { SentimentSatisfied } from '@material-ui/icons';
import axios from 'axios';


function CreatePatient(){

    const wrapper={
        paddingLeft:'15px',
        paddingRight:'15px',
    }

    const form={
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '15px',
        minWidth: '250px',
        width: '100%',
    }
    const row={
        display: 'flex',
        justifyContent:'space-between',
        width: '100%',
        gap: '20px',
    }
    const title={
        fontSize: '26px',
        fontWeight: '700',
        margin:'15px',
        textAlign:'center',
    };

    const label={
        fontSize: '16px',
        fontWeight: '700',
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
        height: '25px',
        paddingLeft: '5px',
    };
    const subtext={
        fontSize: '12px',
        fontWeight: '700',
        textAlign: 'right',
        width: '100%',
        marginTop: '-10px',
        padding: '0',
    }

    const negeris = ['','Wilayah Persekutuan','Selangor','Johor','Kedah','Kelantan','Melaka',
    'Negeri Sembilan','Pahang','Penang','Perak','Perlis','Sabah','Sarawak','Terengganu'];
    const results = ['Positive','Negative','Unknown'];
    const genders = ['','Male','Female'];
    
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


    const changeName = (event) => {
        setName(event.target.value);
        console.log(name);
    }

    const changeIC = (event) => {
        setIC(event.target.value);
    }

    const changeAge = (event) => {
        setAge(event.target.value);
    }

    const changeGender = (event) => {
        setGender(event.target.value);
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
    }

    const changeAddress = (event) => {
        setAddress(event.target.value);
    }

    const changePostal = (event) => {
        setPostal(event.target.value);
    }

    const changeNegeri = (event) => {
        setNegeri(event.target.value);
    }

    const changeCity = (event) => {
        setCity(event.target.value);
    }

    const changeResult = (event) => {
        setResult(event.target.value);
    }

    const changeImage = (event) => {
        setImage(event.target.value);
    }


    const axios = require('axios');

    const onSubmit = (event) =>{
        event.preventDefault();
        const patient = {
            name: name,
            ic: ic,
            age: age,
            gender: gender,
            phone: phone,
            address: address,
            postal: postal,
            negeri: negeri,
            city: city,
            result: result,
            image: image,
        }
        axios.post('http://localhost:5000/patients/add', patient)
        .then((response)=> {console.log(response.data)})  
        .catch((err)=>console.log(err))      
    }


    return(
        <div style={wrapper}>
            <div style={title}>
                <p>New Patient Profile</p>
            </div>
            <form action="" method="post" style={form} onSubmit = {onSubmit}>
                <div style={formGroup}> 
                        <label style={label}>Name</label>
                        <input onChange={changeName} style={formControl} type="text" placeholder="Name" name="name"/>
                </div>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>NRIC No.</label>
                        <input onChange={changeIC} style={formControl} type="text" placeholder="NRIC No." name="IC"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>Age</label>
                        <input onChange={changeAge} style={formControl} type="text" placeholder="Age" name="age"/>
                    </div>
                </div>

                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Gender</label>
                        <select style={formControl} onChange={changeGender}>
                            {
                                genders.map((gender,index)=>{
                                    return(
                                        gender===''
                                        ?<option key={index} value={gender} disabled selected>Gender</option>
                                        :<option key={index} value={gender}>{gender}</option>
                                    );
                                })
                            }
                        </select>
                    </div>  
                    <div style={formGroup}> 
                        <label style={label}>Contact No.</label>
                        <input onChange={changePhone} style={formControl} type="text" placeholder="Contact No." name="phone"/>
                    </div>
                </div>
                <div style={formGroup}> 
                        <label style={label}>Address</label>
                        <input onChange={changeAddress} style={formControl} type="text" placeholder="Address" name="address"/>
                </div>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Postal Code</label>
                        <input onChange={changePostal} style={formControl} type="text" placeholder="Postal Code" name="postal code"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>State</label>
                        <select style={formControl} onChange={changeNegeri}>
                            {
                                negeris.map((negeri,index)=>{
                                    return(
                                        negeri===''
                                        ?<option key={index} value={negeri} disabled selected>State</option>
                                        :<option key={index} value={negeri}>{negeri}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>City</label>
                        <input onChange={changeCity} style={formControl} type="text" placeholder="City" name="city"/>
                    </div>
                </div>
                
                <div style={formGroup}> 
                        <label style={label}>Result</label>
                        <select style={formControl} onChange={changeResult}>
                            {
                                results.map((result,index)=>{
                                    return(
                                        result===''
                                        ?<option key={index} value={result} disabled selected>Result</option>
                                        :<option key={index} value={result}>{result}</option>
                                    );
                                })
                            }
                        </select>
                </div>
                <div style={formGroup}> 
                    <label style={label}>Chest X-ray Image</label>
                    <input onChange={changeImage} style={formControl} type="text"/>
                </div>
                    
                 
                <input type="submit" value="Save" style={button}/>
            </form>
        </div>
    )
}

export default CreatePatient;