import PatientTable from '../components/PatientTable';
import * as tf from '@tensorflow/tfjs'
import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar, setBackdrop } from '../actions';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Scan(){
    const token = useSelector(state=>state.auth.token);
    const dispatch = useDispatch();
    const [model,setModel] = useState(null);
    const [result,setResult] = useState(null);
    const [patients,setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [xray, setXray] = useState(null);
    const imageRef = useRef();


    useEffect(()=>{
        const fetchModel = async ()=>{
            dispatch(setBackdrop(true));
            const localModel = await tf.loadLayersModel("http://localhost:5000/assets/ResNet50/model.json");
            setModel(localModel);
            dispatch(setBackdrop(false));
        };
        fetchModel();
    }, []);

    useEffect(()=>{
        const getPatientsRequest = async () => {
            try{
                const res = await fetch(
                    'http://localhost:5000/patients/',
                    {
                        method: "GET",
                        headers:{
                        "Content-Type": "application/json",
                        "Authorization": token,
                        }
                    },
                );
                const json = await res.json();
                if(res.ok){
                    setPatients(json.matchPatients);
                }else{
                    dispatch(setSnackbar(true,'error',json.message));
                }
            }catch(error){
                dispatch(setSnackbar(true,'error','Request Error'));
            }
        };
        getPatientsRequest();
    }, [result]);

    const postResultRequest = async(results)=>{
        try{
            const res = await fetch(
                `http://localhost:5000/patients/updateStatus/${selectedPatient._id}`,
                {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": token,
                    },
                    body: JSON.stringify({result:results[0]>50?"Positive":"Negative", score:results[0]}),
                }
            );
            const json = await res.json();
            if(res.ok){
                dispatch(setSnackbar(true,'success',json.message));
            }else{
                dispatch(setSnackbar(true,'error',json.message));
            }
        }catch(error){
            dispatch(setSnackbar(true,'error','Request Error'));
        }
    };

    const handleScan = async ()=> {
        dispatch(setBackdrop(true));
        const scanImage = imageRef.current;
        let tensor = tf.browser.fromPixels(scanImage);
        tensor = tf.image.resizeNearestNeighbor(tensor, [224,224]);
        tensor = tensor.toFloat().div(255).expandDims();
        const predictions = await model.predict(tensor).data();
        const results = [];
        predictions.forEach((prediction,index)=>{
            results[index] = parseFloat(prediction*100);
        })
        setResult(results);
        const updatedPatient = selectedPatient;
        updatedPatient.score = results[0];
        updatedPatient.result = results[0]>50? "Positive": "Negative";
        setSelectedPatient(updatedPatient);
        postResultRequest(results);
        dispatch(setBackdrop(false));
    };

    const handleClick = (patient) => {
        setSelectedPatient(patient);
        setXray(patient.image);
    };

    const positiveStyles = buildStyles({
        textSize: '16px',
        text:'inherit',
        pathTransitionDuration: 0.5,
        pathColor: selectedPatient && 
        selectedPatient.score ? 
        `rgba(0, 68, 139, ${selectedPatient.score}%`: 
        `rgba(0, 68, 139, 0%`,
        textColor: 'rgb(0,0,0)',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
    });

    const negativeStyles = buildStyles({
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: selectedPatient && 
        selectedPatient.score ? 
        `rgba(0, 68, 139, ${100-selectedPatient.score}%`: 
        `rgba(0, 68, 139, 0%`,
        textColor: 'rgb(0,0,0)',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
        fontWeight: 700,
    });
    
    const wrapper = {
        height: '90vh',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '3fr 5fr 3fr',
    };
    const information = {
        minWidth: '250px',
    };
    const panel = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '90vh',
        width: '100%',
        minWidth: '400px',
        backgroundColor: 'rgba(240,240,240,50%)'
    };
    const image = {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    }
    const analysis = {
        minWidth: '250px',
    };
    const container = {
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        justifyContent: 'space-between',
    };
    const upperPane = {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
    };
    const group = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '60px auto',
    }
    const positiveStatus = {
        // backgroundColor: 'rgb(0,63,255)',
        backgroundColor: 'rgb(0,68,139)',
        color: 'rgb(255,255,255)',
        boxShadow: '5px 5px 5px rgba(0,0,0,15%)',
        textAlign: 'center',
        padding: '20px',
        width: '30%',
    }
    const negativeStatus = {
        backgroundColor: 'rgba(240,240,240,50%)',
        color: 'dimgray',
        boxShadow: '5px 5px 5px rgba(0,0,0,15%)',
        textAlign: 'center',
        padding: '20px',
        width: '30%'
    };
    const circle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        margin: '40px auto 30px auto',
    };
    const circleBar = {
        width: '40%',
    };
    const bar = {
        width: '100%',
        borderRadius: '2%',
        backgroundColor: 'rgba(240,240,240,50%)',
        boxShadow: '5px 5px 5px rgba(0,0,0,15%)',
        border: '1px solid rgba(0,0,0,15%)',
        margin: '60px auto 30px auto',

    }
    const barFill = {
        backgroundColor: 'rgb(0,63,255)',
        // width: result?`${result[0]}%`:0,
        width: selectedPatient && selectedPatient.score? `${selectedPatient.score}%`:0,
        height: '36px',
    }
  
    const lowerPane = {
        margin:'0 auto',
        marginBottom: '20px',
        width: '70%',
        height: '48px',
        borderRadius: '2%',
        boxShadow: '5px 5px 5px rgba(0,0,0,15%)',
    };
    return(
        <div style={wrapper}>
            <div style={information}>
                <PatientTable
                    patients={patients}
                    handleClick={handleClick}
                />
            </div>
            <div style={panel}>
                {
                    selectedPatient &&
                    <img 
                    crossOrigin='anonymous'
                    src={`http://localhost:5000/assets/images/${xray.substring(13)}`} 
                    alt="X-Ray"
                    style={image} 
                    ref={imageRef} /> 
                }
            </div>
            <div style={analysis}>
                <div style={container}>
                    <div style={upperPane}>
                        <div>
                        <p className="sm-text bold">Result</p>
                        <div style={group}>
                            {
                                selectedPatient && selectedPatient.result === "Positive"
                                // result && result[0]>50
                                ?
                                (
                                <>
                                    <div style={positiveStatus}>
                                        <p className="sm-text bold">Positive</p>
                                    </div>
                                    <div style={negativeStatus}>
                                        <p className="sm-text bold">Negative</p>
                                    </div>
                                </>
                                )
                                :
                                <>
                                    <div style={negativeStatus}>
                                        <p className="sm-text bold">Positive</p>
                                    </div>
                                    <div style={positiveStatus}>
                                        <p className="sm-text bold">Negative</p>
                                    </div>
                                </>
                            }
                        </div>
                        </div>
                        <div>
                            <p className="sm-text bold">Abnormality Score</p>
                            {/* <div style={bar} >
                                <div style={barFill}/>
                            </div> */}
                            <div style={{display:'flex', justifyContent:'space-around', gap: '20px', alignItems:'center'}}>
                                {
                                    selectedPatient 
                                    && selectedPatient.score 
                                    ?
                                    <>
                                    <div style={circle}>
                                    <div style={circleBar}>
                                    <CircularProgressbarWithChildren styles={positiveStyles} value={selectedPatient.score}>
                                        <div><p style={{fontSize: 24, fontWeight: 'bold'}}>{`${(selectedPatient.score).toFixed(2)}%`}</p></div>
                                        <div><p style={{fontSize: 16, fontWeight: 'bold'}}>COVID-19</p></div>
                                    </CircularProgressbarWithChildren>
                                    </div> 
                                    <div style={circleBar}> 
                                    <CircularProgressbarWithChildren styles={negativeStyles} value={100-selectedPatient.score}>
                                        <div><p style={{fontSize: 24, fontWeight: 'bold'}}>{`${(100-selectedPatient.score).toFixed(2)}%`}</p></div>
                                        <div><p style={{fontSize: 16, fontWeight: 'bold'}}>Normal</p></div>
                                    </CircularProgressbarWithChildren>
                                    </div> 
                                    </div>
                                    </>
                                    :
                                    <>
                                    <div style={circle}>
                                    <div style={circleBar}>
                                    <CircularProgressbarWithChildren styles={positiveStyles} value={0}>
                                        <div><p style={{fontSize: 24, fontWeight: 'bold'}}>{`0%`}</p></div>
                                        <div><p style={{fontSize: 16, fontWeight: 'bold'}}>COVID-19</p></div>
                                    </CircularProgressbarWithChildren>
                                    </div> 
                                    <div style={circleBar}> 
                                    <CircularProgressbarWithChildren styles={negativeStyles} value={0}>
                                        <div><p style={{fontSize: 24, fontWeight: 'bold'}}>{`0%`}</p></div>
                                        <div><p style={{fontSize: 16, fontWeight: 'bold'}}>Normal</p></div>
                                    </CircularProgressbarWithChildren>
                                    </div> 
                                    </div>
                                    </>
                                    
                                }
                            </div>
                        </div>
                    </div>
                    {
                        model && selectedPatient
                        ?<button style={lowerPane} className="button sm-text bold" onClick={handleScan}>Scan</button>
                        :<button style={lowerPane} className="button sm-text bold" onClick={handleScan} disabled>Scan</button>
                    }
                </div>                
            </div>
        </div>
    )
}

export default Scan;