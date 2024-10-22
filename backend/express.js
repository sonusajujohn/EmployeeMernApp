const express=require("express")
const app=new express()
const port=5000;

const cors=require('cors');
app.use(cors());

require('./db/connection');

const route=require("./route/employeeroutes")
app.use('/employee',route);




app.listen(port,()=>{
    console.log(`Server is listening at port : ${port}`)})