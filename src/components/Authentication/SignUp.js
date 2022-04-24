import { Box, TextField ,Button} from '@material-ui/core';
import React from 'react'
import { useState } from 'react';

const SignUp = ({handleClose}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const handleSubmit =() =>{

    }
    return (
    
    <Box p={3} style={{display:"flex",flexDirection:"column",gap:"20px"}}>

        <TextField
        variant='outlined'
        type='email'
        label='Enter Email'
        value ={email}
        onChange={(e) => setEmail(e.target.value) }
        fullWidth
        />

<TextField
        variant='outlined'
        type='password'
        label='Enter Password'
        value ={password}
        onChange={(e) => setPassword(e.target.value) }
        fullWidth
/>


<TextField
        variant='outlined'
        type='confirmPassword'
        label='confirm Password'
        value ={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value) }
        fullWidth
/>

<Button variant='contained' 
     size="large"

     style={{backgroundColor:"#2c48e8"}}       
    onClick={handleSubmit}
     >Login</Button>


    </Box>
    )
}

export default SignUp