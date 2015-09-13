var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var UserSchema=new Schema({
	ID:Number,
	FirstName:String,
	LastName:String,
	Gender:String,
	DOB:String,
	UserID:String,
	Password:String,
	Contacts:{
		Mobile:String,
		Email:String,
		State:String,
		City:String
	}
});

module.exports=mongoose.model("Users",UserSchema,"Users");