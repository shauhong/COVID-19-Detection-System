import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar } from '../actions';
import axios from 'axios';

function EditForm(props){

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

    const [name, setName] = useState(props.name); 
    const [ic, setIC] = useState(props.ic); 
    const [age, setAge] = useState(props.age); 
    const [gender, setGender] = useState(props.gender); 
    const [phone, setPhone] = useState(props.phone); 
    const [address, setAddress] = useState(props.address); 
    const [postal, setPostal] = useState(props.postal); 
    const [negeri, setNegeri] = useState(props.negeri); 
    const [city, setCity] = useState(props.city); 
    const [image, setImage] = useState(props.image);
    const id = props.id;

    const [nameError, setNameError] = useState("");
    const [icError, setIcError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [postalError, setPostalError] = useState("");
    const [negeriError, setNegeriError] = useState("");
    const [cityError, setCityError] = useState("");

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

        let isValid = true;

        if(name.trim().length < 1){
            nameError.emptyName = "Please fill in patient's name.";
            dispatch(setSnackbar(true,'error', nameError.emptyName));
            isValid = false;
        }

        if(ic.trim().length < 1){
            icError.emptyIc = "Please fill in patient's NRIC number.";
            dispatch(setSnackbar(true,'error', icError.emptyIc));
            isValid = false;
        }

        if((age.toString()).trim().length < 1){
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

        if((postal.toString()).trim().length < 1){
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

    // const changeImage = (event) => {
    //     setImage(event.target.value);
    // }

    const changeImage = (event) => {
        setImage(event.target.files[0]);
    }


    const token = useSelector(state=>state.auth.token);
    const headers = {
        'authorization': token,
    }

    

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
    
            axios.post(`http://localhost:5000/patients/update/${id}`, patient, {headers:headers})
            .then((response)=> {console.log(response.data)})  
            .catch((err)=>console.log(err)) 
            
            window.location.reload(true);
        }

        
        
        
    }


    return(
        <div style={wrapper}>
            <div style={title}>
                <p>Edit Patient Profile</p>
            </div>
            <form action="" method="post" style={form} onSubmit={onSubmit} >
                <div style={formGroup}> 
                        <label style={label}>Name</label>
                        <input onChange={changeName} style={formControl} type="text" placeholder={name} name="name"/>
                </div>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>NRIC No.</label>
                        <input onChange={changeIC} style={formControl} type="text" placeholder={ic} name="IC"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>Age</label>
                        <input onChange={changeAge} style={formControl} type="text" placeholder={age} name="age"/>
                    </div>
                </div>

                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Gender</label>
                        <select onChange={changeGender} style={formControl}>
                            {
                                genders.map((gender,index)=>{
                                    return(
                                        gender===''
                                        ?<option key={index} value={gender} disabled selected>{props.gender}</option>
                                        :<option key={index} value={gender}>{gender}</option>
                                    );
                                })
                            }
                        </select>
                    </div>  
                    <div style={formGroup}> 
                        <label style={label}>Contact No.</label>
                        <input onChange={changePhone} style={formControl} type="text" placeholder={phone} name="phone"/>
                    </div>
                </div>
                <div style={formGroup}> 
                        <label style={label}>Address</label>
                        <input onChange={changeAddress} style={formControl} type="text" placeholder={address} name="address"/>
                </div>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Postal Code</label>
                        <input onChange={changePostal} style={formControl} type="text" placeholder={postal} name="postal code"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>State</label>
                        <select onChange={changeNegeri} style={formControl}>
                            {
                                negeris.map((negeri,index)=>{
                                    return(
                                        negeri===''
                                        ?<option key={index} value={negeri} disabled selected>{props.negeri}</option>
                                        :<option key={index} value={negeri}>{negeri}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>City</label>
                        <input onChange={changeCity} style={formControl} type="text" placeholder={city} name="city"/>
                    </div>
                </div>
                
                {/* <div style={formGroup}> 
                        <label style={label}>Result</label>
                        <select onChange={changeResult} style={formControl}>
                            {
                                results.map((result,index)=>{
                                    return(
                                        result===''
                                        ?<option key={index} value={result} disabled selected>{result}</option>
                                        :<option key={index} value={result}>{result}</option>
                                    );
                                })
                            }
                        </select>
                </div> 
                <div style={formGroup}> 
                    <label style={label}>Chest X-ray Image</label>
                    <input onChange={changeImage} style={formControl} type="text"/>
                </div>*/}

                <div style={formGroup}> 
                    <label style={label}>Chest X-ray Image</label>
                    <input onChange={changeImage} style={formControl} type="file" accept="image/*"/>
                </div> 

                <input type="submit" value="Save" style={button}/>
                
            </form>
        </div>
    )
}

export default EditForm;