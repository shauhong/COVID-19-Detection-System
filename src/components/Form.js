import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    
    Field:{
        margin: 20,
    },

    selector:{
        marginLeft: 20,
        minWidth: 220,
    }
    
  }));


function Form(){

    const styles = useStyles();
    const [gender,setGender] = React.useState('');
    const [result,setResult] = React.useState('');
    const handleChange_gender = (event) => {
        setGender(event.target.value);
    }

    const handleChange_result = (event) => {
        setResult(event.target.value);
    }


    return(
        <div>
            <div className={styles.Field}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
            </div>
            <div className={styles.Field}>
                <TextField id="outlined-basic" label="NRIC No." variant="outlined" />
            </div>
            <div className={styles.Field}>
                <TextField id="outlined-basic" label="Age" variant="outlined" />
            </div>
            <div>
                <FormControl fullwidth variant="outlined" className={styles.selector}>
                    <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gender}
                        onChange={handleChange_gender}
                        label="Gender"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.Field}>
                <TextField fullwidth id="outlined-basic" label="Contact No." variant="outlined" />
            </div>      
            <div className={styles.Field}>
                <TextField id="outlined-basic" label="Hospital" variant="outlined" />
            </div>
            <div>
                <FormControl fullwidth variant="outlined" className={styles.selector}>
                    <InputLabel id="demo-simple-select-outlined-label">Scan Result</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={result}
                        onChange={handleChange_result}
                        label="Result"
                    >
                        <MenuItem value1="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Positive"}>Positive</MenuItem>
                        <MenuItem value={"Negative"}>Negative</MenuItem>
                        <MenuItem value={"Unknown"}>Unknown</MenuItem>
                    </Select>
                </FormControl>            
            </div>
            <div className={styles.Field}>
                <TextField id="outlined-basic" label="Chest X-ray" variant="outlined" />
            </div>
        </div>
    )

}

export default Form;