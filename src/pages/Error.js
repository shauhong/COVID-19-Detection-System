function Error(){
    const wrapper = {
        height: '90vh',
    }
    const text = {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
    }
    return(
        <div style={wrapper}>
            <p style={text} className="xlg-text bold">Page Does Not Exist</p>
        </div>
    )
}

export default Error;