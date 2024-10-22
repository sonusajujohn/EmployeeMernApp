const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}))

const employeeModel=require('../model/employeeData')


//GET OPERATION

router.get("/",async (req,res)=>{
    try {
        const data= await employeeModel.find();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).send("DATA NOT FOUND");
    }
})


//POST OPERATION 

router.post('/addemployee',async (req,res)=>{
    try {
        var item=req.body;
        const data=new employeeModel(item);
        const savedata=await data.save();
        res.status(200).send("POST OPERATION SUCCESSFULL");
    } catch (error) {
        res.status(404).send(error); 
    }
})


// PUT OPERATION

router.put('/edit/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        const data=await employeeModel.findByIdAndUpdate(id,req.body);
        res.status(200).send("UPDATE OPERATION SUCCESSFULLY DONE")    
    } catch (error) {
        res.status(404).send(error);
    }
})


// DELETE OPERATION

router.delete('/delete/:id',async (req,res)=>{
    try {
         const id=req.params.id;
         const data= await employeeModel.findByIdAndDelete(id);
         res.status(200).send("DELETE OPERATION DONE SUCCESSFULLY");
    } catch (error) {
         res.status(404).send("DELETE OPERATION FAILED")
    }
})


module.exports=router;