import { Link } from 'react-router-dom';
function SignUp(){
    const container={
        display: 'flex',
        height: '90vh',
        width: '100%',
        alignItems: 'center',
    };
    const wrapper={
        display: 'flex',
        margin: '0 auto',
        padding: '20px 40px',
        minWidth: '350px',
        width: '40%',
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
    const textArea={
        paddingTop: '5px',
        width: '100%',
        paddingLeft: '5px',
    }
    const subtext={
        fontSize: '12px',
        fontWeight: '700',
        textAlign: 'right',
        width: '100%',
        marginTop: '-10px',
        padding: '0',
    }
    const states = ['','Wilayah Persekutuan','Selangor','Johor','Kedah','Kelantan','Melaka',
    'Negeri Sembilan','Pahang','Penang','Perak','Perlis','Sabah','Sarawak','Terengganu'];

    return(
        <div style={container}>
            <div style={wrapper}>
                <p className="md-text bold">Join Us Today</p>
                <form action="" method="post" className="form">
                    <div className="form-row">
                        <div className="form-group"> 
                            <label className="sm-text bold">Email</label>
                            <input className="form-control" type="email" placeholder="Email" name="email"/>
                        </div>
                        <div className="form-group"> 
                            <label className="sm-text bold">Password</label>
                            <input className="form-control" type="password" placeholder="Password" name="password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="sm-text bold">Healthcare Facility Name</label>
                        <input className="form-control" type="text" placeholder="Healthcare Facility Name" name="facility name"/>
                    </div>
                    <div className="form-group"> 
                        <label className="sm-text bold">Healthcare Facility Description</label>
                        <textArea rows="3" style={textArea} type="text" placeholder="Restaurant Description" name="description"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="sm-text bold">Name</label>
                            <input className="form-control" type="text" placeholder="Name" name="name"/>
                        </div>
                        <div className="form-group"> 
                            <label className="sm-text bold">Mobile Phone</label>
                            <input className="form-control" type="text" placeholder="Mobile Phone" name="phone"/>
                        </div>
                    </div>
                    <div className="form-group"> 
                            <label className="sm-text bold">Healthcare Facility Address</label>
                            <input className="form-control" type="text" placeholder="Healthcare Facility Address" name="address"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group"> 
                            <label className="sm-text bold">Postal Code</label>
                            <input className="form-control" type="text" placeholder="Postal Code" name="postal code"/>
                        </div>
                        <div className="form-group"> 
                            <label className="sm-text bold">State</label>
                            <select className="form-control">
                                {
                                    states.map((state,index)=>{
                                        return(
                                            state===''
                                            ?<option key={index} value={state} disabled selected>State</option>
                                            :<option key={index} value={state}>{state}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group"> 
                            <label className="sm-text bold">City</label>
                            <input className="form-control" type="text" placeholder="City" name="city"/>
                        </div>
                    </div>
                    <div className="form-group"> 
                        <label className="sm-text bold">Upload Image</label>
                        <input type="file" name="image" accept="image/*"/>
                    </div>
                    <input type="submit" value="Sign Up" style={button} className="button bold"/>
                    <Link style={subtext} to="/login">Back To Login Page</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;