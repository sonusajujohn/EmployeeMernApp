import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const[user,setUser]=useState({
        username:'',
        password:''
    })
    // Navigate Hook used for navigating to the required space
    const navi=useNavigate()
    
    let updateUser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    let sendData=()=>{
        if((user.username=='sonu')&&(user.password=="12345")){         //npm i react-router-dom
            localStorage.setItem("username","admin");   

            navi('/home')   
        }
        else{
            alert("INVALID CREDENTIALS");
        }

    }


  return (
    <div  className='log'> 
        <h1 style={{color:"black"}}>EMPLOYEE APP</h1>
        <h2 style={{color:"black"}}>LOGIN PAGE</h2>
        <TextField required id="outlined-basic"
        label="Username" 
        variant="outlined"
        name="username"
        value={user.username} 
        onChange={updateUser}      //if we give the value alone it will be in read-only mode we need to initiaise onchange inorder to change the value from read-only mode to type in the field.
        />         
        <br /><br />

        <TextField required id="outlined-basic" 
        label="Password" 
        variant="outlined"
        name="password"
        value={user.password} 
        onChange={updateUser}
        />
        <br />

        <br />

        <Button onClick={sendData} color='success'  variant="contained">Submit</Button>
    </div>
  )
}

export default Login