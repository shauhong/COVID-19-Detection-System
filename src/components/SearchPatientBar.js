function PatientSearchBar(props){

    const searchBar = {
        width: '100%',
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        padding: '5px',
        marginTop: '10px'
    }

    const searchTerm = {
        width: '100%',
        border: '2px solid rgb(0,0,0)',
        height: '32px',
        outline: 'none',
        fontSize: '16px',
        fontWeight: '400',
        padding: '10px'
    }

    const button = {
        // backgroundColor: 'rgb(0,0,0)',
        // color: 'rgb(255,255,255)',
        // font: 'inherit',
        width: '108px',
        height: '32px',
        boxShadow: '5px 5px 10px rgba(0,0,0,16%)',
        cursor: 'pointer',
    }


    return(
        <form action='' method="get">
            <div style={searchBar}>
                <input style={searchTerm} type="search" placeholder="Search Patient" name="Name" onChange={props.handleChange}/>
                <input style={button} className="button sm-text bold shadow-effect" type="submit" value="Search"/>
            </div>
        </form>
    )
}

export default PatientSearchBar;