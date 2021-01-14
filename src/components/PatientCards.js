import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setBackdrop } from '../actions';
import PatientCard from "./PatientCard";
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import SearchPatientBar from "./SearchPatientBar";
import Modal from 'react-modal';
import CreatePatient from './CreatePatient';
import background from '../assets/images/background.jpg';


const PatientCards = () => {
    const dispatch = useDispatch();
    const AddNewButton = {
        float:'right',
        cursor: 'pointer',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft:'10px',
        paddingRight:'10px',
        fontSize:'15px',
        marginRight:'20px',
        border:'white',
        fontFamily:'sourceSansPro',
        fontWeight:'bold',
      }
      
    
    const patientInfo = {
        backgroundColor: 'rgb(255,255,255)',
        height: '150px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    };

    const imageContainer = {
        height: '150px',
        width: '150px',
    }

    const imageStyle = {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    };

    const info={
        display: 'grid',
        gridTemplateRows: '3fr 1fr 1fr',
        margin: '10px',
        gap: '10px',

    };

    const bannerRegion={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("https://kit8.net/images/thumbnails/580/386/detailed/4/At_the_hospital@2x.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        marginBottom: '20px',
        width: '100%',
    }

    const bannerTitle={
        fontSize:'70px',
        margin:'20px',
        color:'white',
        textShadow: '5px -1px 0 black, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000',
        fontFamily:'Fantasy',
        letterSpacing:'4px',
    }

    const styles = useCoverCardMediaStyles();
    const token = useSelector(state=>state.auth.token);
    const [patients, setPatients] = useState([]);
    const [xray, setXray] = useState(null);
    const [search, setSearch] = useState('');
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [user,setUser] = useState("");


    const changeSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getPatientsRequest = async () =>{
        dispatch(setBackdrop(true));
        try{
            const res = await fetch(
                'http://localhost:5000/patients',
                {
                    type: "GET",
                    headers: 
                    {
                        "Content-Type": "application/json",
                        'authorization': token,
                    },
                }
            );
    
            const json = await res.json();
            dispatch(setBackdrop(false));
            setPatients(json.matchPatients);
            setUser(json.user);
            
            console.log(json);

        }catch(error){
            dispatch(setBackdrop(false));
            console.log("Unhandled Error");
        }
        
    };


    useEffect(() => {
        getPatientsRequest();
    },[]);


    const useStyles = makeStyles({

        banner:{
            width:"100%",
            position:"relative",
            height:"500px",
            marginBottom:"50px",
        },

        gridContainer:{
            minHeight: '30vh',
            paddingTop:"20px",
            paddingBottom:"20px",
            paddingLeft:"30px",
            paddingRight:"30px",

        },

        gridItem:{
            paddingTop:"10px",
            paddingBottom:"10px", 
            paddingLeft:"20px",
            paddingRight:"20px",    
        }
    });

    const classes = useStyles();

    return( 
        <div>

        <div style={bannerRegion}>
            <div>
            </div>
            <div>
                <div style={bannerTitle}>{user.facilityName}</div>
                <SearchPatientBar handleChange={changeSearch}/>
            </div>
        </div>
        
        <button  onClick={() => setModalIsOpen(true)} style={AddNewButton} className="white-button sm-text bold shadow-effect">Add Patient</button>
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
                marginBottom:'30px',
                width: '45%', 
                }
            }
            }
        >
        <CreatePatient openModal={setModalIsOpen}/>
        <button className="closeButton " onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
            


            <Grid container className={classes.gridContainer}>                   
                {
                    patients.length>0 &&
                    patients.map((patient,index) => {
                        if(patient.name.toLowerCase().includes(search.toLowerCase()))
                        return(                 
                            <Grid item xs={12} sm={6} md={4} lg={3} spacing={5} className={classes.gridItem}>
                            <Link to = {'/patients/' + patient._id}  key={index}>
                            <PatientCard
                                name={patient.name} ic={patient.ic} gender={patient.gender}
                                age={patient.age} phone={patient.phone} address={patient.address}
                                postal={patient.postal} negeri={patient.negeri} city={patient.city}
                                result={patient.result} image={patient.image} id={patient._id}
                            /> 
                            </Link>
                            </Grid>
                            

                        )
                        
                })}
                
            </Grid>
        </div>
    );
};

export default PatientCards;