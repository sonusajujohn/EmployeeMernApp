import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navi=useNavigate();
  let clearUser=()=>{
    localStorage.removeItem("token");
    navi('/');
  }
  return (
    <>
    <Box sx={{marginLeft:'-140px',marginRight:'-140px',marginTop:'-40px',marginBottom:'50px',flexGrow: 1 }}>
    <AppBar  position="static" sx={{padding:"10px",background:"maroon"}}>
      <Toolbar>
        <IconButton 
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 7 }}
        >
        </IconButton>
        <Typography className='h' variant="h4" component="div" sx={{ flexGrow: 2,fontFamily:"sans-serif",fontSize:"40px",fontWeight:"900",textShadow:"5px 10px 10px black"}}  >
          EMPLOYEE APP
        </Typography>
        
      <Link to={'/home'}><Button color="warning" variant='contained' sx={{marginRight:"10px",borderRadius:"50px",padding:"10px"}}>Home</Button></Link>
      <Link to={'/add'}><Button color="warning" variant='contained'sx={{marginRight:"10px",borderRadius:"50px",padding:"10px"}}>Add Employee</Button></Link>
      <Button onClick={clearUser} color="warning" variant='contained'sx={{marginRight:"10px",borderRadius:"50px",padding:"10px"}}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>
  </>
  )
}

export default Nav