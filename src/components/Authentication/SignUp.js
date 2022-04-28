// import { async } from '@firebase/util';
import { Box, TextField ,Button} from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp = ({handleClose}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const {setAlert} = CryptoState();

    const handleSubmit =async() =>{

        if(password !== confirmPassword)
        {
            setAlert({
                open:true,
                message:"Password donot match",
                type:"error",
            });
            return;
        }


        try {
            const result = await createUserWithEmailAndPassword(
                
                auth,
                email,
                password 
                
                );

                // console.log(result);

                setAlert({
                    open:true,
                    message:`Sign up succesful . Welcome ${result.user.email}`,
                    type:"success",
                });

                handleClose();
            
        } catch (error) {
            setAlert({
                open:true,
                message:error.message,
                type:"error",
            });
            return ;
                
        }

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
     >Sign Up</Button>


    </Box>
    )
}

export default SignUp