 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let userSchema=new Schema({
 	name:{type:String,required:true},
 	pw:{type:String,required:true}
 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let userinfos=mongoose.model('userinfos',userSchema);

module.exports=userinfos
//抛出数据模型






