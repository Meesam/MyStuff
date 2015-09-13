var mongoose=require("mongoose");
module.exports={
	dbconnection:function(req,res,next){
		if(mongoose.connection.readyState===0){
	      mongoose.connect('mongodb://localhost:27017/MyStuff');	
	      next();		
		}
		else
		 next();
	}
}