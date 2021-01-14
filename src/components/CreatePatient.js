import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar } from '../actions';
import { SentimentSatisfied } from '@material-ui/icons';
import axios from 'axios';


function CreatePatient(props){
    const dispatch = useDispatch();

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
        height: '30px',
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
    const results = ['','Positive','Negative','Unknown'];
    const genders = ['','Male','Female'];
    
    const [name, setName] = useState(""); 
    const [ic, setIC] = useState(""); 
    const [age, setAge] = useState(""); 
    const [gender, setGender] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [address, setAddress] = useState(""); 
    const [postal, setPostal] = useState(""); 
    const [negeri, setNegeri] = useState(""); 
    const [city, setCity] = useState(""); 
    const [image, setImage] = useState(""); 

    const [nameError, setNameError] = useState("");
    const [icError, setIcError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [postalError, setPostalError] = useState("");
    const [negeriError, setNegeriError] = useState("");
    const [cityError, setCityError] = useState("");
    const [imageError, setImageError] = useState("");


    const formValidation = () => {
        const nameError = {};
        const icError = {};
        const ageError = {};
        const genderError = {};
        const phoneError = {};
        const addressError = {};
        const postalError = {};
        const negeriError = {};
        const cityError = {};
        //const resultError = {};
        const imageError = {};


        let isValid = true;

        if(name.trim().length < 1){
            nameError.emptyName = "Please fill in patient's name.";
            dispatch(setSnackbar(true,'error', nameError.emptyName));
            isValid = false;
        }

        if (/[./'][^a-zA-Z][a-zA-Z\s]*$/.test(name)){
            nameError.notName = "Please fill in a valid patient's name.";
            dispatch(setSnackbar(true,'error', nameError.notName));
            isValid = false;
        }

        if(ic.trim().length < 1){
            icError.emptyIc = "Please fill in patient's NRIC number.";
            dispatch(setSnackbar(true,'error', icError.emptyIc));
            isValid = false;
        }

        if(!Number(age)){
            ageError.notAge = "Patient's age can only contain numbers.";
            dispatch(setSnackbar(true,'error', ageError.notAge));
            isValid = false;
        }

        if(age.trim().length < 1){
            ageError.emptyAge = "Please fill in patient's age.";
            dispatch(setSnackbar(true,'error', ageError.emptyAge));
            isValid = false;
        }

        if(phone.trim().length < 1){
            phoneError.emptyPhone = "Please fill in patient's contact number.";
            dispatch(setSnackbar(true,'error', phoneError.emptyPhone));
            isValid = false;
        }

        if(address.trim().length < 1){
            addressError.emptyAddress = "Please fill in patient's address.";
            dispatch(setSnackbar(true,'error', addressError.emptyAddress));
            isValid = false;
        }

        if(!Number(postal)){
            postalError.notPostal = "Patient's age can only contain numbers.";
            dispatch(setSnackbar(true,'error', postalError.notPostal));
            isValid = false;
        }

        if(postal.trim().length < 1){
            postalError.emptyPostal = "Please fill in patient's postal code.";
            dispatch(setSnackbar(true,'error', postalError.emptyPostal));
            isValid = false;
        }

        if(negeri.trim().length < 1){
            negeriError.emptyNegeri = "Please fill in patient's state of ";
            dispatch(setSnackbar(true,'error', negeriError.emptyNegeri));
            isValid = false;
        }

        if(city.trim().length < 1){
            cityError.emptyCity = "Please fill in patient's city.";
            dispatch(setSnackbar(true,'error', cityError.emptyCity));
            isValid = false;
        }

        setNameError(nameError);
        setIcError(icError);
        setAgeError(ageError);
        setGenderError(genderError);
        setPhoneError(phoneError);
        setAddressError(addressError);
        setPostalError(postalError);
        setNegeriError(negeriError);
        setCityError(cityError);
        return isValid;
    }


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

    const changeImage = (event) => {
        setImage(event.target.files[0]);
    }


    const axios = require('axios');
    const token = useSelector(state=>state.auth.token);

    const headers = {
        'authorization': token,
    }

    console.log(token);   

    const onSubmit = (event) =>{
        event.preventDefault();
        const isValid = formValidation();

        if(isValid){
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
                image: image,
            }

            const formData = new FormData();
            for(let key in patient){
                formData.append(key,patient[key]);
            }
            
            axios.post('http://localhost:5000/patients/add', formData, {headers:headers})
            .then((response)=> {
                dispatch(setSnackbar(true,'success',"Patient profile added successfully!"));
                window.setTimeout(function(){window.location.reload()},800);
            })  
            .catch(function(error) {
                if (error.response) {
                  console.log(error.response.data);
                  dispatch(setSnackbar(true,'error',"No image is uploaded."));
                } 
              }
            )         
        }
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
                        <label style={label}>City</label>
                        <input onChange={changeCity} style={formControl} type="text" placeholder="City" name="city"/>
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
                    
                </div>
                

                <div style={formGroup}> 
                    <label style={label}>Chest X-ray Image</label>
                    <input onChange={changeImage} style={formControl} type="file" accept="image/*"/>
                </div>
                    
                 
                <input type="submit" value="Save" style={button} />
            </form>
        </div>
    )
}

export default CreatePatient;