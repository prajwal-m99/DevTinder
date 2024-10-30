const express=require("express");

const app=express();

app.use("/Users",(req,res)=>{
    res.send("Hello HEllo")
})

app.use((req,res)=>{
    res.send("Hello From Server");
});

app.listen(7777, ()=>{
    console.log("Server successfully running on port 7777");
});