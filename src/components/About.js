  
import male from '../assets/images/male.jpg'
import female from '../assets/images/female.jpg'
function About(){
    
    const wrapper={
        height: '90vh'
    }
    const team={
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        top: '25%',
    }
    const teamMember={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '20px',
        position: 'relative',
        gap: '10px'
    };
    const portraitBox={
        width: '200px',
        height: '200px',
    };
    const portrait={
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    };
    const title={
        textAlign: 'center',
        position: 'relative',
        top: '15%',
    };

    const subtitle={
        color: 'rgb(150,150,150)',
    };

    return(
        <div style={wrapper}>
            <div style={title}><p className="xlg-text bold primary-color">Meet Our Team</p></div>
            <div style={team}>
                <div className="md-text bold" style={teamMember}>
                    <div style={portraitBox}><img src={male} alt="Logo" style={portrait} /></div>
                    <p>Lim Shau Hong</p>
                    <p className="secondary-color">Detection</p>
                </div> 
                <div className="md-text bold" style={teamMember}>
                    <div style={portraitBox}><img src={male} alt="Logo" style={portrait} /></div>
                    <p>Ng Jing Xuan</p>
                    <p className="secondary-color">Dashboard</p>
                </div>
                <div className="md-text bold" style={teamMember}>
                    <div style={portraitBox}><img src={female} alt="Logo" style={portrait} /></div>
                    <p>Yeo Pui Yan</p>
                    <p className="secondary-color">Information</p>
                </div>
            </div>
        </div>
    );
}

export default About;