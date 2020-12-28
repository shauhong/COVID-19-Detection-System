import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Card from "./Card";
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';


const Cards = () => {

    
    /*const patientInfo = {
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
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundImage:'https://i.pinimg.com/736x/34/81/fc/3481fcd65a0e64146657ef18abb241aa.jpg',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        marginBottom: '50px',
    };*/
    
    const token = useSelector(state=>state.token);
    const [patients, setPatients] = useState([]);
    const styles = useCoverCardMediaStyles();


    const getPatientsRequest = async () =>{
        
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
            setPatients(json);

        }catch(error){
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
            paddingTop:"20px",
            paddingBottom:"20px",
            paddingLeft:"20px",
            paddingRight:"20px",

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
            

            {/*<Box className={classes.banner} p={2}>
                <CardMedia
                    image={"https://kit8.net/images/thumbnails/580/386/detailed/4/At_the_hospital@2x.png"}
                    classes={styles}
                />
                <Box position={'relative'} fontSize={'30px'} paddingLeft={'30px'} >
                    <h3>John Doe Hospital</h3>
                    <p>Address</p>
                </Box>
            </Box>*/}


            <Grid container className={classes.gridContainer}>                   
                {
                    patients.length>0 &&
                    patients.map((patient,index) => {

                        return(                        
                            <Grid item xs={12} sm={6} md={4} lg={3} spacing={5} className={classes.gridItem}>
                            <Link to = {'/patients/' + patient._id}  key={index}>
                            <Card
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

export default Cards;