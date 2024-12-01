const express=require( "express");
const connectdb = require("../config/database.js");
const User=require("./models/user.js")

const app = express();

app.use(express.json());

app.get("/feed", async(req,res)=>{
    
 const data= await User.find({});
     res.send(data);
})

app.post("/signup", async(req,res)=>{
    const user =new User(req.body);
    try{
        await user.save();
        res.status(200).send("Users added successfully");
    }
    catch(error){
        res.status(501).send("Not saved ",error);
    }
   
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
  


