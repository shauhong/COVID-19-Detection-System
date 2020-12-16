import { Link } from 'react-router-dom';

function UserForm(){
    const wrapper={
        display: 'flex',
        margin: '0 auto',
        padding: '30px 40px',
        minWidth: '350px',
        width: '40%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid rgba(0,0,0,16%)',
        boxShadow: '5px 5px 5px rgba(0,0,0,16%), -5px 5px 5px rgba(0,0,0,16%)',
        gap: '20px',
        borderRadius: '2%',
    };

    const form={
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '15px',
        minWidth: '250px',
        width: '100%',
    }
    const row={
        display: 'flex',
        justifyContent:'space-between',
        width: '100%',
        gap: '20px',
    }
    const title={
        fontSize: '24px',
        fontWeight: '700',
    };

    const label={
        fontSize: '16px',
        fontWeight: '700',
    };
    const button={
        width: '100%',
        height: '32px',
        backgroundColor: 'rgb(0,0,0)',
        color: 'rgb(255,255,255)',
        cursor: 'pointer',
    };
    const formGroup={
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '5px',
    };
    const formControl={
        width: '100%',
        height: '24px',
        paddingLeft: '5px',
    };
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
        <div style={wrapper}>
            <p style={title}>Sign Up with FoodPal</p>
            <form action="" method="post" style={form}>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Email</label>
                        <input style={formControl} type="email" placeholder="Email" name="email"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>Password</label>
                        <input style={formControl} type="password" placeholder="Password" name="password"/>
                    </div>
                </div>

                <div style={row}>
                    <div style={formGroup}>
                        <label style={label}>Name</label>
                        <input style={formControl} type="text" placeholder="Name" name="name"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>Mobile Phone</label>
                        <input style={formControl} type="text" placeholder="Mobile Phone" name="phone"/>
                    </div>
                </div>
                <div style={formGroup}> 
                        <label style={label}>Address</label>
                        <input style={formControl} type="text" placeholder="Address" name="address"/>
                </div>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Postal Code</label>
                        <input style={formControl} type="text" placeholder="Postal Code" name="postal code"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>State</label>
                        <select style={formControl}>
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
                    <div style={formGroup}> 
                        <label style={label}>City</label>
                        <input style={formControl} type="text" placeholder="City" name="city"/>
                    </div>
                </div>
                <input type="submit" value="Sign Up" style={button}/>
                <Link style={subtext} to="/login">Back To Login Page</Link>
            </form>
        </div>
    )
}

export default UserForm;