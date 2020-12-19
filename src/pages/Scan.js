import xray from '../assets/images/xray.jpg';
import PatientTable from '../components/PatientTable';


function Analysis(){
    const wrapper = {
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
    const positive = {
        backgroundColor: 'rgb(0,63,255)',
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        padding: '20px',
        width: '30%',
    }
    const negative = {
        backgroundColor: 'rgba(240,240,240,50%)',
        color: 'dimgray',
        textAlign: 'center',
        padding: '20px',
        width: '30%'
    }
    const bar = {
        width: '100%',
        borderRadius: '2%',
        backgroundColor: 'rgba(240,240,240,50%)',
        border: '1px solid rgba(0,0,0,15%)',
        margin: '60px auto 30px auto',

    }
    const barFill = {
        backgroundColor: 'rgb(0,63,255)',
        width: '90%',
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
            <div style={upperPane}>
                <div>
                <p className="sm-text bold">Result</p>
                <div style={group}>
                    <div style={positive}>
                        <p className="sm-text bold">Positive</p>
                    </div>
                    <div style={negative}>
                        <p className="sm-text bold">Negative</p>
                    </div>
                </div>
                </div>
                <div>
                    <p className="sm-text bold">Abnormality Score</p>
                    <div style={bar} >
                        <div style={barFill}/>
                    </div>
                    <p className="xlg-text" style={{textAlign:'center', color:'red'}}>90%</p>
                </div>
            </div>
            <button style={lowerPane}className="button sm-text bold">Scan</button>
        </div>
    )
}

function Scan(){
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
    };
    const image = {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    }
    const analysis = {
        minWidth: '250px',
    };
    return(
        <div style={wrapper}>
            <div style={information}>
                <PatientTable/>
            </div>
            <div style={panel}>
                <img src={xray} style={image} /> 
            </div>
            <div style={analysis}>
                <Analysis/>
            </div>
        </div>
    )
}

export default Scan;