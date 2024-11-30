const express=require( "express");
const connectdb = require("../config/database.js");
const User=require("./models/user.js")

const app = express();

app.post("/signup", async(req,res)=>{
    const user =new User({
        firstName:"Prajwal",
        lastName:"Mallapur",
        emailId:"prajwalmallapur123@gmail.com",
        age:24 ,
        gender:"Male"
    })
    await user.save();
    res.status(200).send("Users added successfully");
});

// Wait for the database connection before starting the server
connectdb().then(()=>{
    console.log("Database connected successfully");
    app.listen(7777, () => {
        console.log("Server successfully running on port 7777");
      });
}).catch((error) => {
    console.error("DB connection failed", error);
  });
  


