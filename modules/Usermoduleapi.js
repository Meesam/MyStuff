var mongoose=require('mongoose');
var Users=require('../models/Users')

module.exports={
	getAllUser:function(req,res){
     Users.find({},{_id:0},function(err,usersdata){
     	if(err)
     		res.send(404,err);
     	else
     		res.json(usersdata);
     });
   },

   findUser:function(req,res){
   	Users.findOne({'ID' :''+req.params.ID+''},{_id:0},function(err,usersdata){
      if(err)
        res.send(404,err);
      else
        res.json(usersdata);
    });
   },

   userLogin:function(req,res){
    Users.findOne({'UserID':''+req.body.UserID+'','Password':''+req.body.Password+''},{_id:0},function(err,usersdata){
      if(err)
        res.send(404,err);
      if(!usersdata){
        res.json({success:false,message:'Authentication failed. User not found.'});
      }else if(usersdata){
        res.json({success:true,message:'valid User'});
      }
    });
   }
}