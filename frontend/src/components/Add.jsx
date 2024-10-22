import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';

<Nav/>
const Add = () => {
    const [employee,setEmployee]=useState({
        Id:'',
        Name:'',
        Designation:'',
        Salary:'',
        Department:'',
        Location:''
    });

    const navi=useNavigate();

    function fetchValue(e){
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    const location=useLocation();
    
    let sendData=()=>{
        if(location.state!=null){
            axios.put(`http://localhost:5000/employee/edit/`+location.state.emp._id,employee).then((res)=>{
                alert("Data Updated");
                navi('/home');
            }).catch((error)=>{
                console.log(error);
            })
        }
        else{
            axios.post('http://localhost:5000/employee/addemployee/',employee).then((res)=>{
                alert("Data Added Successfully");
                navi('/home');
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
    useEffect(()=>{
        if(location.state!=null){
            setEmployee({...employee,
                            Id:location.state.emp.Id,
                            Name:location.state.emp.Name,
                            Designation:location.state.emp.Designation,
                            Salary:location.state.emp.Salary,
                            Department:location.state.emp.Department,
                            Location:location.state.emp.Location })
        }    
    },[])
  return (
    <>
    <Nav/>
   <Box

    component="form"
    sx={{
  border: '2px solid black',
  borderColor: 'BLACK',
  backgroundColor: 'lightyellow',
  // borderWidth: '0.3px', 
  borderStyle: 'solid'
}}

// sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
noValidate
autoComplete="off"
>
<TextField id="standard-basic"
  label="Employee ID"
  variant="standard"
  name='Id'
  value={employee.Id}
  onChange={fetchValue} /><br />

<TextField id="standard-basic"
  label="Employee Name"
  variant="standard"
  name='Name' 
  value={employee.Name}
  onChange={fetchValue} /><br />

<TextField id="standard-basic"
  label="Employee Designation"
  variant="standard"
  name='Designation'
  value={employee.Designation}
  onChange={fetchValue} /><br />

<TextField id="standard-basic"
  label="Employee Department"
  variant="standard"
  name='Department'
  value={employee.Department}
  onChange={fetchValue} /><br />

<TextField id="standard-basic"
  label="Employee Salary"
  variant="standard"
  name='Salary'
  value={employee.Salary}
  onChange={fetchValue} /><br />

<TextField id="standard-basic"
  label="Location"
  variant="standard"
  name='Location'
  value={employee.Location}
  onChange={fetchValue} /><br />
<br /><br />
<Button variant="contained" onClick={sendData} sx={{marginBottom:"20px",marginTop:"-10px"}}>Submit</Button>
</Box>
</>
  )
}

export default Add