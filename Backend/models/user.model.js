import mongoose from "mongoose";

const loggedinUserSchema = new mongoose.Schema({
  email:{
    require:true,
    type:String,
    unique:true
  },
  password:{
      require:true,
    type:String,
  }
}) 

const loggedInUser = mongoose.model("LoggedInUser", loggedinUserSchema);

export default loggedInUser;