const mongoose = require("mongoose"); 


const connectdb = async () => {
    await mongoose.connect(
        "mongodb+srv://prajwalmallapur123:Prajwal%40123@node.ygps9.mongodb.net/"
  )
};

module.exports = connectdb;
