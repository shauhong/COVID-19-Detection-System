function PatientCard(props){
    const wrapper = {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr 1fr',
        textAlign: 'center',
        backgroundColor: `${props.color}`,
        color: `${props.textColor}`,
        padding: '5px',
    }
    return(
        <div style={wrapper}>
            <p className="xsm-text medium">{props.id}</p>
            <p className="xsm-text medium">{props.name}</p>
            <p className="xsm-text medium">{props.date}</p>
            <p className="xsm-text medium">{props.score}</p>
        </div>
    );
}

export default PatientCard;