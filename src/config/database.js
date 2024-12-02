const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://prajwalmallapur123:Prajwal%40123@node.ygps9.mongodb.net/"
  );
};

module.exports = connectDB;
