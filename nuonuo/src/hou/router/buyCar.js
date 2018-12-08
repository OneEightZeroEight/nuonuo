const express=require('express');
const Router=express.Router();
//数据模型引入
const buyCar=require('../mongo/buyCar.js')



//http://127.0.0.1:4000/buyCar/XXX


//添加购物车
//传送数据 	id、title、price、imgpath、buynum、isShow
Router.post('/addCar',(req,res)=>{
  // console.log(req,res)
// 1.接受数据

   // let {id,title,size,price,imgpath,buynum}=req.body
   let {id}=req.body



	buyCar.find({id},function(err,docs){
	    // console.log(docs)
	    if(docs.length){
	    	// console.log(docs)
	    	let  num = docs[0].buynum+1
	    	//let buynum = {buynum:docs[0].buynum};
	    	console.log(num);
	    	let buynum = {buynum:num};
	    	console.log(buynum)
		// res.send({err:0,msg:'成功查询',data:docs})
	    	// console.log(docs[0].buynum);
	    	//buynum++;
			buyCar.updateOne({id},buynum)
			.then((data)=>{
				res.send({err:0,msg:'增加数量1',data:null})
			})
			.catch((err)=>{
				console.log(err)
				res.send({err:-1,msg:'增加不成功',data:null})
			})    	
	    }else{

	    	 let {id,title,size,price,imgpath,buynum,isShow}=req.body;
			 buyCar.insertMany({id,title,size,price,imgpath,buynum,isShow})
			 .then((data)=>{
			 	
			 	res.send({err:0,msg:'成功新增了购物车',data:null})
			 })
			 .catch((err)=>{
			 	console.log(err)
			    res.send({err:-1,msg:'新增购物车失败',data:null})
			 })    	
	    }
	})




})




//查询购物车商品
//传进一个空对象即可，查询到购物车的数据并生成在页面上
Router.post('/findCar',(req,res)=>{
	// console.log(req,res);
	buyCar.find({},function(err,docs){
	    if(err){
	        console.log('err:',err);
	            return;
	    };
	    res.send({err:0,msg:'查询成功',data:docs});	
	})
})


//增加购物车数量
Router.post('/addNum',(req,res)=>{
	// console.log(req,res);
	let {id,buynum}=req.body
	buyCar.updateOne({id},{buynum},function(err,docs){
	    if(err){
	        console.log('err:',err);
	            return;
	    };
	    res.send({err:0,msg:'修改成功',data:null});	
	})
})



//删除购物车商品
Router.post('/delCar',(req,res)=>{
	// console.log(req,res);
	let {id}=req.body
	buyCar.remove({id},function(err,docs){
	    if(err){
	        console.log('err:',err);
	            return;
	    };
	    res.send({err:0,msg:'删除成功',data:null});	
	})
})








module.exports=Router;