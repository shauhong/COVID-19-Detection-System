function Error(){
    const wrapper = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
    }
    const text = {
        fontSize: '72px',
        textAlign: 'center',
    }
    return(
        <div style={wrapper}>
            <p style={text}>Page Does Not Exist</p>
        </div>
    )
}

export default Error;