const mongoose=require ('mongoose');
const mongoDB_URL="mongodb+srv://sonusajujohn:haidasonu@cluster0.qwql7.mongodb.net/employeeMernDB?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoDB_URL).then(()=>{
    console.log("CONNECTION ESTABLISHED SUCCESSFULLY")
}).catch(()=>{
    console.log("CONNECTION FAILED")
})
