var Usermoduleapi=require('../modules/Usermoduleapi');

module.exports=function(app){
	app.get('/userapi/alluser',Usermoduleapi.getAllUser);
	app.get('/userapi/finduser/:ID',Usermoduleapi.findUser);
}