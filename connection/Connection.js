const mongoose = require("mongoose");

const Connection = async() => {
  try {
    const result = await mongoose.connect(`${process.env.MONGO_URI}`,{dbName:"test"});
    if(result) {
      console.log("Connection established");
    }else {
      console.log("Connection error")
    }

  }catch(err) {
    console.log("Something went wrong while connecting the database ...");

  }

}

module.exports = Connection;