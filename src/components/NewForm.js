function NewForm(){

    const wrapper={
        paddingLeft:'15px',
        paddingRight:'15px',
    }

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
        fontSize: '26px',
        fontWeight: '700',
        margin:'15px',
        textAlign:'center',
    };

    const label={
        fontSize: '16px',
        fontWeight: '700',
    };
    const button={
        width: '100%',
        height: '32px',
        backgroundColor: 'darkblue',
        color: 'rgb(255,255,255)',
        cursor: 'pointer',
        marginTop: '5px',
    };
    const formGroup={
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '5px',
    };
    const formControl={
        width: '100%',
        height: '25px',
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

    const results = ['Positive','Negative','Unknown'];
    const genders = ['','Male','Female'];


    return(
        <div style={wrapper}>
            <div style={title}>
                <p>New Patient Profile</p>
            </div>
            <form action="" method="post" style={form}>
                <div style={formGroup}> 
                        <label style={label}>Name</label>
                        <input style={formControl} type="text" placeholder="Name" name="name"/>
                </div>
                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>NRIC No.</label>
                        <input style={formControl} type="text" placeholder="NRIC No." name="IC"/>
                    </div>
                    <div style={formGroup}> 
                        <label style={label}>Age</label>
                        <input style={formControl} type="text" placeholder="Age" name="age"/>
                    </div>
                </div>

                <div style={row}>
                    <div style={formGroup}> 
                        <label style={label}>Gender</label>
                        <select style={formControl}>
                            {
                                genders.map((gender,index)=>{
                                    return(
                                        gender===''
                                        ?<option key={index} value={gender} disabled selected>Gender</option>
                                        :<option key={index} value={gender}>{gender}</option>
                                    );
                                })
                            }
                        </select>
                    </div>  
                    <div style={formGroup}> 
                        <label style={label}>Contact No.</label>
                        <input style={formControl} type="text" placeholder="Contact No." name="phone"/>
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
                
                <div style={formGroup}> 
                        <label style={label}>Result</label>
                        <select style={formControl}>
                            {
                                results.map((result,index)=>{
                                    return(
                                        result===''
                                        ?<option key={index} value={result} disabled selected>Result</option>
                                        :<option key={index} value={result}>{result}</option>
                                    );
                                })
                            }
                        </select>
                </div>
                <div style={formGroup}> 
                    <label style={label}>Chest X-ray Image</label>
                    <input style={formControl} type="file"/>
                </div>
                    
                 

                <input type="submit" value="Save" style={button}/>
            </form>
        </div>
    )
}

export default NewForm;