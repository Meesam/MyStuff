var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var UserLoginSchema=new Schema({
  UserID:String,
  Password:String,
  Token:String
});

module.exports=mongoose.model("UserLogin",UserLoginSchema,"UserLogin");