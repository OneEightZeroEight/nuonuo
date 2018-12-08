const express=require('express');
const Router=express.Router();
//数据模型引入
const userinfos=require('../mongo/User.js')


//用户注册
Router.post('/addUser',(req,res)=>{
	let {name,pw} = req.body

	userinfos.find({name},function(err,docs){
		if(docs.length){
			res.send({err:2,msg:'该用户名已经被注册'})
		}else{
			userinfos.insertMany({name,pw})
			 .then((data)=>{
			 	
			 	res.send({err:0,msg:'注册成功',data:null})
			 })
			 .catch((err)=>{
			 	console.log(err)
			    res.send({err:-1,msg:'注册失败',data:null})
			 })
		}			
	})

})


//用户登陆
Router.post('/checkUser',(req,res)=>{
	let {name,pw} = req.body
	userinfos.find({name,pw},function(err,docs){
		if(docs.length){
			res.send({err:1,msg:'登陆成功',data:docs})
		}else{
			res.send({err:0,msg:'不好意思，该用户还未注册请前往注册'})
		}
	})
})


module.exports=Router;