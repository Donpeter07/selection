import * as React from "react";
import './FormValidation.css';
import { useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IMaskInput, PhoneInput } from "react-imask";
import { PropTypes } from "prop-types";
import { Avatar, Select } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import {useNavigate} from 'react-router-dom'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    Input,
    MenuItem,
    Typography,
    Radio,
    RadioGroup,
    Grid,
} from "@mui/material";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+91(#00) 000-0000"
            definitions={{
                "#": /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


function FormValidation({fetchData}) {

    let navigate = useNavigate()

    const [value, setValue] = React.useState([null, null]);
    
    const [allValues, setAllValues] = useState([{
        name:"",
        email:"",
        address:"",
        password:"",       
        contact:"(100) 000-0000",
        country:"",
        qualification:"",   
        dob:"",
        description:"",
        date:{value},
    }])
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if(allValues.name && allValues.email && allValues.password){
            fetchData(allValues)
            navigate('/formdata')
            // window.location.href="/formdata"
            // console.log(allValues.name,allValues.email,allValues.password);
        }else {
            alert('invalid data is empty')
        }
    };

    const handleChange = (event) => {
        setAllValues({
            ...allValues,
            [event.target.name]: event.target.value,
        });
    };
    // console.log(allValues.password);

    

    // const buttonClicked= (name,email)=> {
    //     if (name == '' & email == '') {
    //         alert('values are empty')
    //     }else
    //     alert('values are added',name ,email)
        
    // }

    return (
        <div>
            <Container>
                <Box component="form"  onSubmit={handleSubmit} style={{ border: "2px solid red", padding: 20, }}>
                    <div style={{display:'flex',}}>
                        <Avatar>D</Avatar>
                        <Typography variant="h6" marginLeft={2}>User-name</Typography>
                    </div>
                    <h2 style={{ textAlign: "center" }}>Registration Form</h2>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                id="name"
                                name="name"
                                label="Name"
                                value={allValues.name}
                                onChange={handleChange}
                                error={allValues.name ? false: true}
                              
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                value={allValues.email}
                                onChange={handleChange}
                                error={allValues.email ? false : true}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField
                                id="address"
                                name='address'
                                label="Address"
                                required
                                margin="normal"
                                value={allValues.address}
                                fullWidth
                                onChange={handleChange}
                            // multiline
                            // rows={3}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={allValues.password}
                                onChange={handleChange}
                                error={allValues.password ? false : true}
                            />
                        </Grid>
                        <Grid item sx={12} sm={6}>
                            <InputLabel htmlFor="formatted-text-mask-input">
                                Contact-Number
                            </InputLabel>
                            <Input
                                value={allValues.contact}
                                onChange={handleChange}
                                name="contact"
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                            />
                        </Grid>
                        <Grid  xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="select-input">Country</InputLabel>
                                <Select
                                    // margin='normal'
                                    label="countries"
                                    name="country"
                                    onChange={handleChange}
                                    value={allValues.country}
                                >
                                    <MenuItem value='india'>INDIA</MenuItem>
                                    <MenuItem value='australia'>AUSTRALIA</MenuItem>
                                    <MenuItem value='canada'>CANADA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl >
                                <FormLabel id="demo-row-radio-buttons-group-label">
                                    Gender
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="other"
                                        control={<Radio />}
                                        label="Other"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="date"
                                label="DOB"
                                name='dob'
                                type="date"
                                onChange={allValues.dob}
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                             <FormControl fullWidth >
                            <InputLabel id="select-input">Qualification</InputLabel>
                            <Select
                                // margin='normal'
                                label="Qualification"
                                onChange={handleChange}
                                name='qualification'
                                value={allValues.qualification}
                            >
                                <MenuItem value='highersecondary'>HIGHER SECONDARY</MenuItem>
                                <MenuItem value='undergraduate'>UNDER-GRADUATE</MenuItem>
                                <MenuItem value='postgraduate'>POST-GRADUATE</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        {/* <Grid item xs={12} md={9}>
                <Select options={multiSelect}/>
              </Grid> */}

                        <Grid item xs={4} md={6} >
                            <TextField
                            fullWidth
                                name='description'
                                label='Job-description' />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            localeText={{ start: 'Check-in', end: 'Check-out' }}
                        >
                            <DateRangePicker
                                value={value}
                                onChange={handleChange}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} />
                                        <Box sx={{ mx: 2 }}> to </Box>
                                        <TextField {...endProps} />
                                    </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>

                        </Grid>
                       
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // sx={{ mt: 3, mb: 2 }}
                            style={{ marginTop: 15, marginLeft: 10 }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>



                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default FormValidation;