const express=require("express");
const app=express();
const PORT=8000;

// routes
app.use("/",require("./routes"))

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`sever is running on port ${PORT}`);
    }
})