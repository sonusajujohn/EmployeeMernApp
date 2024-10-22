import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Home = () => {
  
  const [employee,setEmployee]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/employee/").then((res)=>{
      setEmployee(res.data);
    }).catch((error)=>{
      console.log("Failure in Fetching",error);

    })
  },[]);

  const navi=useNavigate();

  // EDIT OR PUT OPERATION

  function editemp(emp){
      navi('/add',{state:{emp}})   
  }
  //DELETE OPERATION
  function deleteemp(p){
    axios.delete(`http://localhost:5000/employee/delete/${p}`).then(()=>{
      alert("Data Deleted Successfully");
      setEmployee(employee.filter(employee => employee._id !== p));
    }).catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <>
    
    <Nav/>
    <Container className='cont' >
    <Grid container spacing={5} >
        {employee.map((emp) => (
            <Grid item key={emp.id} xs={12} sm={6} md={4}>
                <Card sx={{border:"2px double black", boxShadow:"2px 5px 1px 5px"}}>
                    <CardContent>
                        <Typography  variant="body1" component="div">
                           Employee ID : <b>{emp.Id}</b>
                        </Typography><br />
                        <Typography  variant="h5" component="div">
                           <b>Employee Name :</b> <b><i>{emp.Name}</i></b>
                        </Typography><br />
                        <Typography variant="h6" color="textWarning">
                            <b>Designation :</b> {emp.Designation}
                        </Typography><br />
                        <Typography  variant="h6" component="div">
                           <b>Department:</b>  {emp.Department}
                        </Typography><br />
                        <Typography variant="body1">
                            <b>SALARY :</b> {emp.Salary}  |  <b>   LOCATION :</b>  {emp.Location}
                        </Typography><br />
                        
                        <Button onClick={()=>{editemp(emp)}} color='success' sx={{margin:"10px"}} variant="contained">Edit</Button>
                        <Button onClick={()=>{deleteemp(emp._id)}} color='error' variant="contained">Delete</Button>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Container>
</>
);
};

export default Home
