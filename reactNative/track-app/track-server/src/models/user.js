const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
      mail:{
         type:String,
         unique:true,
         required:true
      },
      password:{
         type:String,
         required:true
   }
});
mongoose.model("User",userSchema);