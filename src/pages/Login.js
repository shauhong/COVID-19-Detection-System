import { Link } from 'react-router-dom';
function Login(){
    const container={
        display: 'flex',
        height: '90vh',
        width: '100%',
        alignItems: 'center',
    };
    const wrapper={
        display: 'flex',
        margin: '0 auto',
        padding: '30px 40px',
        minWidth: '350px',
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid rgba(0,0,0,15%)',
        boxShadow: '5px 5px 5px rgba(0,0,0,16%), -5px 5px 5px rgba(0,0,0,16%)',
        gap: '20px',
        borderRadius: '2%',
    };
    const button={
        height: '32px',
        width: '100%',
    }
    const subtext={
        fontSize: '12px',
        fontWeight: '700',
        textAlign: 'right',
        width: '100%',
        marginTop: '-10px',
        padding: '0',
    }
    return(
        <div style={container}>
            <div style={wrapper}>
                <p className="md-text bold">Login with COVID-19</p>
                <form className="form" action="" method="">
                    <div className="form-group">
                        <label className="sm-text bold">Email Address</label>
                        <input className="form-control" type="email" placeholder="Email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label className="sm-text bold">Password</label>
                        <input className="form-control" type="password" placeholder="Password" name="password"/>
                    </div >
                    <input type="submit" value="Login" className="button bold" style={button}/>
                    <Link to="/signup" style={subtext}>Sign Up</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;